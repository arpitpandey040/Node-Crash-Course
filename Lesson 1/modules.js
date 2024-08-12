// const xyz = require("./people"); // it does not provide asscces to people.js file
// const { people } = require("./people"); // we can also use destruring to access values as per our requirements
const { people, ages } = require("./people"); // we can also use destruring to access values as per our requirements

// console.log(xyz) // empty if required file is not exported

// console.log(xyz);

// console.log(people);
// console.log(people, ages);

const os = require("os");
console.log(os.platform(), os.homedir());
