package model

// 首字母大写 public
// 首字母小写 private
// "id" xiang 
type Post struct {
	Id      string `json:"id"`
	User    string `json:"user"`
	Message string `json:"message"`
	Url     string `json:"url"`
	Type    string `json:"type"`
}
