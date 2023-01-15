package backend

// io 读文件
import (
    "context"
    "fmt"
    "io"

    "around/constants"

    "cloud.google.com/go/storage"
)

var (
    GCSBackend *GoogleCloudStorageBackend
)

type GoogleCloudStorageBackend struct {
    client *storage.Client
    bucket string
}

func InitGCSBackend() {
    client, err := storage.NewClient(context.Background())
    if err != nil {
        panic(err)
    }

	// 创建singlton connection to GCS
    GCSBackend = &GoogleCloudStorageBackend{
        client: client,
        bucket: constants.GCS_BUCKET,
    }
}

//                                              r 前端传的文件
func (backend *GoogleCloudStorageBackend) SaveToGCS(r io.Reader, objectName string) (string, error) {
    // background setting
	ctx := context.Background()

	// 创建一个空的object
    object := backend.client.Bucket(backend.bucket).Object(objectName)

	// 创建这个object writer
    wc := object.NewWriter(ctx)

	// 把用户的文件copy给object
    if _, err := io.Copy(wc, r); err != nil {
        return "", err
    }

	// 把writer close
    if err := wc.Close(); err != nil {
        return "", err
    }

	// 对object 的permission 进行设置
	// ACL access control level
	//                              所有user                  可读
    if err := object.ACL().Set(ctx, storage.AllUsers, storage.RoleReader); err != nil {
        return "", err
    }

	// 拿到attribute(里面有image URL)
    attrs, err := object.Attrs(ctx)
    if err != nil {
        return "", err
    }

    fmt.Printf("File is saved to GCS: %s\n", attrs.MediaLink)
    return attrs.MediaLink, nil
}
