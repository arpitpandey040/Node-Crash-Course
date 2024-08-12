// streams -> Start using Data before it has finished loading.

const fs = require("fs");

// to read stream
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

// readStream.on('data', (chunk)=>{
//     console.log(`-----New Chunk ------`)
//     console.log(chunk)

// })

// to write stream
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  console.log(`-----New Chunk ------`);
  console.log(chunk);
  writeStream.write("\nNew Chunk\n");
  writeStream.write(chunk);
});


// pipe - > piping must be from a readable string to a writeable string 

readStream.pipe(writeStream)