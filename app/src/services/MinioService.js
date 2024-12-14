const Minio = require("minio");

const policy = {
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Principal: "*",
      Action: ["s3:GetObject", "s3:ListBucket"],
      Resource: ["arn:aws:s3:::blog", "arn:aws:s3:::blog*"]
    }
  ]
};
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

      this.makeBucket(this.bucketName, "us-east-1", (err) => {
        if (err) {
          return console.error("Error al crear el bucket:", err);
        }
        console.log(`Bucket '${this.bucketName}' creado exitosamente.`);
      });
    });

    this.setBucketPolicy(this.bucketName, JSON.stringify(policy), (err) => {
      if (err) {
        return console.error(
          "Error al configurar la política del bucket:",
          err
        );
      }
    });
  }
}

module.exports = { MinioService };
