package backend

import (
    "context"
    "fmt"

    "around/constants"

    "github.com/olivere/elastic/v7"
)

// global singlton elastic client
var (
    ESBackend *ElasticsearchBackend
)

// 相当于java里的sessionFactory(用于链接elastic search)
type ElasticsearchBackend struct {
    client *elastic.Client
}

// initiate elastic client (new ElasticsearchBckend obj)
// also, only new one (singlton)
func InitElasticsearchBackend() {
    // create connection to elastic 
    client, err := elastic.NewClient(
        elastic.SetURL(constants.ES_URL),
        elastic.SetBasicAuth(constants.ES_USERNAME, constants.ES_PASSWORD))
    if err != nil {
        panic(err)
    }

    // check whether database/Index has been exisited
    // Do(context.Background())以某设定执行, 里面可以加限制时间等
    exists, err := client.IndexExists(constants.POST_INDEX).Do(context.Background())
    if err != nil {
        panic(err)
    }

    // not exisit
    // mapping: schema 
    // property: column
    // type: keyword 搜索必须完全匹配 =
    //       text    搜素必须包含 contains
    //       index   建index 优化搜索（建tree）/ 不写就默认建index(除非写false)
    // 插入数据时可以零时再增加property (感觉下面的定义没有意义？为了清晰，这边基本的要declear)
    if !exists {
        mapping := `{
            "mappings": {
                "properties": {
                    "id":       { "type": "keyword" },
                    "user":     { "type": "keyword" },
                    "message":  { "type": "text" },
                    "url":      { "type": "keyword", "index": false },
                    "type":     { "type": "keyword", "index": false }
                }
            }
        }`
        _, err := client.CreateIndex(constants.POST_INDEX).Body(mapping).Do(context.Background())
        if err != nil {
            panic(err)
        }
    }

    exists, err = client.IndexExists(constants.USER_INDEX).Do(context.Background())
    if err != nil {
        panic(err)
    }

    if !exists {
        mapping := `{
                        "mappings": {
                                "properties": {
                                        "username": {"type": "keyword"},
                                        "password": {"type": "keyword"},
                                        "age":      {"type": "long", "index": false},
                                        "gender":   {"type": "keyword", "index": false}
                                }
                        }
                }`
        _, err = client.CreateIndex(constants.USER_INDEX).Body(mapping).Do(context.Background())
        if err != nil {
            panic(err)
        }
    }
    fmt.Println("Indexes are created.")

    // 赋值给global    定义type        stuct里面赋值
    // &把object的地址拿出
    ESBackend = &ElasticsearchBackend{client: client}
}

// The parenthesis before the function name is the Go way of defining the object on which these functions will operate.
//   默认引入变量                           input:   query          database/index  output: search result                           
func (backend *ElasticsearchBackend) ReadFromES(query elastic.Query, index string) (*elastic.SearchResult, error) {
    searchResult, err := backend.client.Search().
        Index(index).       // search in database/index
        Query(query).
        Pretty(true).
        Do(context.Background())
    if err != nil {
        return nil, err
    }

    return searchResult, nil
}

func (backend *ElasticsearchBackend) SaveToES(i interface{}, index string, id string) error {
    _, err := backend.client.Index().
        Index(index).
        Id(id).
        BodyJson(i).
        Do(context.Background())
    return err
}



