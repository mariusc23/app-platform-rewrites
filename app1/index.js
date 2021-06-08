const express = require("express");

const app = express();

app.use(function (req, res) {
  res.send("app1: " + req.originalUrl);
});

app.listen(process.env.PORT || 8080);
