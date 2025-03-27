const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
