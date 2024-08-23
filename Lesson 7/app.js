const express = require("express");

// creating Express app
const app = express();

// express view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// how to stop browser caching data
// app.use((req, res, next) => {
//     res.setHeader('Cache-Control', 'no-store');
//     next();
//   });
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});
// 404 Page
app.use((req, res) => {
  res.status(404).render("404");
}); // use is a middleware
