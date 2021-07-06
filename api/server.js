const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log("Candidatos api RESTFULL MASTER server started on:" + port);
