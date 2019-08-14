// const http = require('http');
// Replace http with express
const express = require('express');
const Todo = require('./models/Todo');

// Create the server and call it "app"
const app = express();
// Create a variable for the port#
const port = 3000;

// const server = http.createServer((req, res) => {
// Replace with app.get()
app.get('/todos', (req, res) => {
    console.log("You've got a request!");
    const allTodos = Todo.getAll();
    allTodos        
        .then((data) => {
            console.log('OMG ITS DATAZZZZZZ');
            console.log(data);
            // res.end(JSON.stringify(data));
            res.json(data);
        })
    // console.log("\n\n\n===========================");
    // console.log(allTodos);
    // res.end(allTodos);
});

// server.listen(3000);
app.listen(port);