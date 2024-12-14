const express = require("express");
const { PostRouter } = require("./api/posts/PostRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

new PostRouter().run(app);

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
