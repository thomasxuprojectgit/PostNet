package handler

// jwtmiddleware 加在dispatcher和handler之间，作为设备或其他验证
//  client -> dispatcher -> jwtmiddleware -> handler1
//                       -> jwtmiddleware -> handler2
import (
	"net/http"

	jwtmiddleware "github.com/auth0/go-jwt-middleware"
    jwt "github.com/form3tech-oss/jwt-go"

	"github.com/gorilla/mux"
)

func InitRouter() *mux.Router {
	router := mux.NewRouter()
	router.Handle("/upload", http.HandlerFunc(uploadHandler)).Methods("POST")
	router.Handle("/search", http.HandlerFunc(searchHandler)).Methods("GET")
	return router
}


