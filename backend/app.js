const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// db connection

const conn = require("./db/conn");

conn();

app.listen(3000, function () {
  console.log("Servidor Online!");
});
