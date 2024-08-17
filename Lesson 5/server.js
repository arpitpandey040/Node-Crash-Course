const _ = require("lodash");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // loadash

  const num = _.random(0, 20);
  console.log(`i am num`, num);

  

});
