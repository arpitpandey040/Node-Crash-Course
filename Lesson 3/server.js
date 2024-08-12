const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(`request made`)/
  // console.log(req)/
  console.log(req.url, req.method);

  // set header content type
  // res.setHeader("Content-Type", "text/plain"); // to send the plain text
  // res.write("hello World!");
  // to send html
  res.setHeader("Content-type", "text/html");
  res.write("<p>Hello World</p>");
  res.write("<p>hello again, World</p>");
  res.end();
});
// console.log(`I am server`)

server.listen(3000, "localhost", () => {
  console.log(`Listening for requests on post 3000`);
});
