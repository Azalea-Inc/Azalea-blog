const express = require("express");
const fileUpload = require("express-fileupload");

const { PostRouter } = require("./api/posts/PostRouter");
const { MongoDatabase } = require("./data/MongoDatabase");
const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

new PostRouter().run(app);

MongoDatabase.connect();
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
