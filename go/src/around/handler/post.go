package handler

import (
    "encoding/json"
    "fmt"
    "net/http"
   
    "around/model"
)

/*
r *http.Request 用pointer，复制地址, 不用复制整个Request, 轻量化
w http.ResponseWriter  用于往http response的body里写东西， 我们会先往这个Writer里写， Writer再往http response的body里写东西，
                       相当于buffer 
*/
func uploadHandler(w http.ResponseWriter, r *http.Request) {
    // Parse from body of request to get a json object.
    fmt.Println("Received one upload request")
    decoder := json.NewDecoder(r.Body)
    var p model.Post
    if err := decoder.Decode(&p); err != nil {
        panic(err)
    }

    fmt.Fprintf(w, "Post received: %s\n", p.Message)
}
