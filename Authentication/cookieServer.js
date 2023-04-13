// https://www.section.io/engineering-education/what-are-cookies-nodejs/
const cookieParser = require("cookie-parser");
const express = require("express");

//setup express app
const app = express();

// let’s you use the cookieParser in your application -> The cookie parser parses cookies and puts the cookie information on req object in the middleware.
app.use(cookieParser());

//set a simple for homepage route
app.get("/", (req, res) => {
  res.send("welcome to a simple HTTP cookie server");
});

//a get route for adding a cookie
app.get("/setcookie", (req, res) => {
  res.cookie(`username`, `user1`);
  res.send("Cookie have been saved successfully");
});

// get the cookie incoming request
app.get("/getcookie", (req, res) => {
  //show the saved cookies
  console.log(req.cookies);
  res.send(req.cookies);
});

//server listening to port 8000
app.listen(8000, () => console.log("The server is running port 8000..."));
