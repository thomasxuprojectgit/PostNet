package handler

// jwtmiddleware 加在dispatcher和handler之间，作为设备或其他验证
//  client -> dispatcher -> jwtmiddleware -> handler1
//                       -> jwtmiddleware -> handler2
import (
	"net/http"

	jwtMiddleware "github.com/auth0/go-jwt-middleware"
    jwt "github.com/form3tech-oss/jwt-go"

	"github.com/gorilla/mux"
)

func InitRouter() *mux.Router {

    jwtMiddleware := jwtMiddleware.New(jwtMiddleware.Options{
        ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
            return []byte(mySigningKey), nil
        },
        SigningMethod: jwt.SigningMethodHS256,
    })

    router := mux.NewRouter()

	// 用jwtMiddleware包裹，增加加密解密（token）
	
    router.Handle("/upload", jwtMiddleware.Handler(http.HandlerFunc(uploadHandler))).Methods("POST")
    router.Handle("/search", jwtMiddleware.Handler(http.HandlerFunc(searchHandler))).Methods("GET")

    router.Handle("/signup", http.HandlerFunc(signupHandler)).Methods("POST")
    router.Handle("/signin", http.HandlerFunc(signinHandler)).Methods("POST")

    return router
}
