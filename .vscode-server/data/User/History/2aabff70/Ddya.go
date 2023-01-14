package main

import (
	"around/handler"
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("started-service")

    backend.InitElasticsearchBackend()

    log.Fatal(http.ListenAndServe(":8080", handler.InitRouter()))

}
