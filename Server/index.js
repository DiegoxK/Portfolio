const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

// Main Server
const app = express();

// Page Router
const router = require("./router/routes");

// Middlewares
app.use(cors({ credentials: true, origin: process.env.SERVER_ORIGIN }));
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(express.json());
app.use(process.env.MAIN_ROUTE, router);

// Mongoose server
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.fdktp.mongodb.net/portfolio?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.SERVER_PORT);
    console.log(`Database runing at ${process.env.SERVER_PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
