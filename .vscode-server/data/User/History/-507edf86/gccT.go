package handler

// jwtmiddleware 加在dispatcher和handler之间，作为设备或其他验证
//  client -> dispatcher -> jwtmiddleware -> handler1
//                       -> jwtmiddleware -> handler2
import (
	"net/http"

	jwtMiddleware "github.com/auth0/go-jwt-middleware"
    jwt "github.com/form3tech-oss/jwt-go"

	"github.com/gorilla/mux"
    "github.com/gorilla/handlers"
)

func InitRouter() http.Handler {

    // mySigningKey是秘钥
	// SigningMethod: jwt.SigningMethodHS256是加密方式
	jwtMiddleware := jwtMiddleware.New(jwtMiddleware.Options{
        ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
            return []byte(mySigningKey), nil
        },
        SigningMethod: jwt.SigningMethodHS256,
    })

    router := mux.NewRouter()

	// 用jwtMiddleware包裹，增加解密（token）
	// 即次两个handler得通过验证才能使用
    router.Handle("/upload", jwtMiddleware.Handler(http.HandlerFunc(uploadHandler))).Methods("POST")
    router.Handle("/search", jwtMiddleware.Handler(http.HandlerFunc(searchHandler))).Methods("GET")

    router.Handle("/signup", http.HandlerFunc(signupHandler)).Methods("POST")
    router.Handle("/signin", http.HandlerFunc(signinHandler)).Methods("POST")

    originsOk := handlers.AllowedOrigins([]string{"*"})
    headersOk := handlers.AllowedHeaders([]string{"Authorization", "Content-Type"})
    methodsOk := handlers.AllowedMethods([]string{"GET", "POST", "DELETE"})

    return handlers.CORS(originsOk, headersOk, methodsOk)(router)

}
