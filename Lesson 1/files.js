// files system modules in node.js

const fs = require("fs"); // file system modules is asynchronous which means it does not block the code

// reading files

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log("Error reading file:", err);
//   }
//   //   console.log(data);
//   console.log(data.toString());
// });
// // console.log('last line')

// // writing file

// fs.writeFile(
//   "./docs/blog1.txt",
//   "hi there i am changing previously written text in this file by using Node modules files system. i am learning how to write a file using the same",
//   () => {
//     console.log(`hey congrats you successfully written in the file`);
//   }
// );

// fs.writeFile("./docs/blog2.txt", "hello blog 2", () => {
//   console.log("blog 2 created successfully");
// });

// directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`folder created.`);
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`folder removed.`);
  });
}

// deleting files

if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`File deleted`);
  });
}
