const http = require('http');
const Todo = require('./models/Todo');
const server = http.createServer((req, res) => {
    console.log("You've got a request!");
    res.end("hello world");
});

server.listen(3000);