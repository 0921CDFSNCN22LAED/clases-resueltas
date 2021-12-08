const path = require("path");
const express = require("express");
const mainRouter = require("./routes/index");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/// PARA LOS FORMULARIOS
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  session({
    secret: "los gatitos son lo mejor",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(mainRouter);

app.listen(3000);
