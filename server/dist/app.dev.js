"use strict";

var express = require('express');

var app = express();
var port = 8000;
app.get("/", function (req, res) {
  res.send("HIIIIIII");
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});