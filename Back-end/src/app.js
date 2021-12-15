const morgan = require("morgan");
const express = require("express");
const route = require("./routes/index.route");
const connectDB = require("../db/db");

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//parse json
app.use(express.json());

route(app);

module.exports = app;
