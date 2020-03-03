// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// home route
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

// about route
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

// works route
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

// images route
app.get("/images", (request, response, next) => {
  response.sendFile(__dirname + "/views/images.html");
});

const PORT = process.env.PORT || 3000;

// Server Started
app.listen(PORT, () => {
  console.log("My first app listening on port" + PORT);
});
