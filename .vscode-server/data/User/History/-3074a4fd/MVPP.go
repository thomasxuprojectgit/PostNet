package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"path/filepath"

	"around/model"
	"around/service"
)

var (
    mediaTypes = map[string]string{
        ".jpeg": "image",
        ".jpg":  "image",
        ".gif":  "image",
        ".png":  "image",
        ".mov":  "video",
        ".mp4":  "video",
        ".avi":  "video",
        ".flv":  "video",
        ".wmv":  "video",
    }
)


/*
r *http.Request 用pointer，复制地址, 不用复制整个Request, 轻量化
w http.ResponseWriter  用于往http response的body里写东西， 我们会先往这个Writer里写， Writer再往http response的body里写东西，
                       相当于buffer
*/
func uploadHandler(w http.ResponseWriter, r *http.Request) {
    // Parse from body of request to get a json object.
    // fmt.Println("Received one upload request")
    // decoder := json.NewDecoder(r.Body)
    // var p model.Post
    // if err := decoder.Decode(&p); err != nil {
    //     panic(err)
    // }

    // fmt.Fprintf(w, "Post received: %s\n", p.Message)

    fmt.Println("Received one upload request")

    p := model.Post{
        Id:      uuid.New(),
        User:    r.FormValue("user"),
        Message: r.FormValue("message"),
    }

    file, header, err := r.FormFile("media_file")
    if err != nil {
        http.Error(w, "Media file is not available", http.StatusBadRequest)
        fmt.Printf("Media file is not available %v\n", err)
        return
    }

    suffix := filepath.Ext(header.Filename)
    if t, ok := mediaTypes[suffix]; ok {
        p.Type = t
    } else {
        p.Type = "unknown"
    }

    err = service.SavePost(&p, file)
    if err != nil {
        http.Error(w, "Failed to save post to backend", http.StatusInternalServerError)
        fmt.Printf("Failed to save post to backend %v\n", err)
        return
    }

    fmt.Println("Post is saved successfully.")

}

func searchHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Println("Received one request for search")
    w.Header().Set("Content-Type", "application/json")

    // 从http request里拿user和keywordquery
    user := r.URL.Query().Get("user")
    keywords := r.URL.Query().Get("keywords")

    var posts []model.Post
    var err error
    if user != "" {
        posts, err = service.SearchPostsByUser(user)
    } else {
        posts, err = service.SearchPostsByKeywords(keywords)
    }

    if err != nil {
        // error wirte to response
        http.Error(w, "Failed to read post from backend", http.StatusInternalServerError)
        fmt.Printf("Failed to read post from backend %v.\n", err)
        return
    }

    // modle.Post -> json string
    // json.Marshal serialize       
    js, err := json.Marshal(posts)
    if err != nil {
        http.Error(w, "Failed to parse posts into JSON format", http.StatusInternalServerError)
        fmt.Printf("Failed to parse posts into JSON format %v.\n", err)
        return
    }
    w.Write(js)
}

