const path = require("path");
const express = require("express");
const mainRouter = require("./routers/main");
const userLogs = require("./middlewares/user-logs");

const app = express();

app.use(userLogs);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const publicPath = path.join(__dirname, "../public");
const staticMiddleware = express.static(publicPath);
app.use(staticMiddleware);

app.use(mainRouter);

app.listen(3000);
