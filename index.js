const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
require("./db");
///////////////////////////
const postrouter = require("./routes/post");
const getrouter = require("./routes/get");

app.use("/post", postrouter);
app.use("/datas", getrouter);
//////////////////////////
app.listen(port, function () {
  console.log("app running");
});
