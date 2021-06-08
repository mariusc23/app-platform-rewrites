const express = require("express");

const app = express();

app.use(function (req, res) {
  res.json(req.originalUrl);
});

app.listen(process.env.PORT || 8080);
