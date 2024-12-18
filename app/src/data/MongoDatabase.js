const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/blog";

class MongoDatabase {
  static connect() {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on("connected", () => {
      console.log("Mongoose se ha conectado a MongoDB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Error en la conexión de MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Desconectado de MongoDB");
    });
  }
}

module.exports = { MongoDatabase };
