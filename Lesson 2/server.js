const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(`request made`)
})
// console.log(`I am server`)/

server.listen(3000, 'localhost', ()=>{
    console.log(`Listening for requests on post 3000`)
})