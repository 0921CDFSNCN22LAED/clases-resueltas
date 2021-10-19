const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.listen(3000, () => {
  console.log("SE PRENDIO EL SERVER, SOY BACKEND DEV");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/lovelace", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/lovelace.html"));
});
