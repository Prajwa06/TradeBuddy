const express = require("express");
const app = express();
const port = 8080;
const date = new Date();
// listen
app.listen(port, () => {
    console.log(
      "app is running on port " + port + " at " + date.toLocaleString()
    );
  });
  