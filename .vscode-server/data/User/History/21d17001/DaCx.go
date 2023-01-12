package backend

import (
    "context"
    "fmt"

    "around/constants"

    "github.com/olivere/elastic/v7"
)

var (
    ESBackend *ElasticsearchBackend
)

// 相当于java里的sessionFactory
type ElasticsearchBackend struct {
    client *elastic.Client
}
