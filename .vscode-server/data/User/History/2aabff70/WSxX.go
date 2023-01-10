package main

import (
	"around/handler"
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("started-service")
	log.Fatal(http.ListenAndServe(":8080", handler.InitRouter()))
}
