const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(`request made`)/
  // console.log(req)/
  console.log(req.url, req.method);

  // routing in Node.js
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // set header content type
  // res.setHeader("Content-Type", "text/plain"); // to send the plain text
  // res.write("hello World!");
  // to send html
  // res.setHeader("Content-type", "text/html");
  // res.write("<p>Hello World</p>");
  // res.write("<p>hello again, World</p>");
  // res.end();

  // return html pages

  // fs.readFile("./views/index.html", (err, data) => { // instead of hard code now we can use path
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // res.write(data);
      // res.end();

      // or we can do this like the below-
      res.end(data);
    }
  });
});
// console.log(`I am server`)

server.listen(3000, "localhost", () => {
  console.log(`Listening for requests on post 3000`);
});
