const Minio = require("minio");

class MinioService extends Minio.Client {
  constructor() {
    super({
      endPoint: "localhost",
      port: 9000,
      useSSL: false,
      accessKey: process.env.MINO_ACCESS_KEY,
      secretKey: process.env.MINO_SECRET_KEY
    });

    this.bucketName = "blog";
  }

  setup() {
    this.bucketExists(this.bucketName, (err, exists) => {
      if (err) {
        return console.error(
          "Error al verificar la existencia del bucket: ",
          err
        );
      }

      if (exists) {
        return;
      }

      this.makeBucket("blog", "us-east-1", (err) => {
        if (err) {
          return console.error("Error al crear el bucket:", err);
        }
        console.log(`Bucket '${this.bucketName}' creado exitosamente.`);
      });
    });
  }
}

module.exports = MinioService;
