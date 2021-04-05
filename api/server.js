// BUILD YOUR SERVER HERE

const express = require("express"); // imports 

const server = express(); //instance of the server 

server.use(express.json()); //tells it to parse JSON in request body




module.exports = server; // EXPORT YOUR SERVER instead of {}
