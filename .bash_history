whoami
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt-get update
sudo apt-get install golang-go
go version
cd go
cd src
cd around
gp run main.go
go run main.go
go mod init around
go get github.com/gorilla/mux
go run main.go
git config --global user.name "Thomas Xu"
git config --global user.email xunannhj429@gmail.com
git config --global user.name "thomasxuprojectgit"
sudo apt install default-jre
java -version
sudo apt install apt-transport-https
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
sudo sh -c 'echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" > /etc/apt/sources.list.d/elastic-7.x.list'
sudo apt update
sudo apt install elasticsearch
sudo vim /etc/elasticsearch/elasticsearch.yml
sudo cat /etc/elasticsearch/elasticsearch.yml|grep "^[^#;]"
sudo systemctl enable elasticsearch
sudo systemctl start elasticsearch
sudo systemctl status elasticsearch
sudo /usr/share/elasticsearch/bin/elasticsearch-users useradd thomasxucpa -p 123456 -r superuser
pwd
cd go/src/around
go get github.com/olivere/elastic/v7
sudo systemctl status elasticsearch+
sudo systemctl status elasticsearch
cd go/src/around
go run main.go
go get github.com/pborman/uuid
go get cloud.google.com/go/storage
