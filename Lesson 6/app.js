const express = require("express");

// creating Express app
const app = express();

// listen for requests
app.listen(3000);

// how to stop browser caching data
// app.use((req, res, next) => {
//     res.setHeader('Cache-Control', 'no-store');
//     next();
//   });
app.get("/", (req, res) => {
  // res.send("<p>Hello from Express</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send( '<p>About Page</p>');
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
// 404 Page

// this should be at the very end otherwise routing pages with manually redirect to 404.
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
}); // use is a middleware
