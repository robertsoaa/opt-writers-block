const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const storiesRoutes = require("./routes/stories");
const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    //"mongodb://localhost/node-angular"
    //"mongodb://robertsoaa:eJaQLekcLjNOkdS1@ds125058.mlab.com:25058/heroku_v7t85mx5"
     "mongodb+srv://robertsoaa:" +
       process.env.MONGO_ATLAS_PW +
       "@cluster0-e8xbs.mongodb.net/node-angular"
      // "@cluster0-ntrwp.mongodb.net/node-angular"
      )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/images", express.static(path.join("backend/images")));
//app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
 });

app.use("/api/stories", storiesRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
//app.use((req, res, next) => {
  //res.sendFile(path.join(__dirname, "angular","index.html"));
//});

module.exports = app;
