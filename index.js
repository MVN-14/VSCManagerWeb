const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(80, () => {
  console.log("Server is running");
});
