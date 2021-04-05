// BUILD YOUR SERVER HERE

//IMPORTS 
const express = require("express"); 
const User = require("./users/model");


//INSTANCE OF EXPRESS APP

const server = express(); //instance of the server 

//GLOBAL MIDDLEWARE

server.use(express.json()); //tells it to parse JSON in request body

//ENDPOINTS

// [GET] ALL USERS

server.get("/api/users", (req, res)=>{
    User.find()
    .then((users)=>{
        console.log("SUCCEEDED GETTING ALL USERS", users)
        res.status(200).json(users);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message})
    })
})

// [GET] Specific User

server.get("/api/users/:id", (req, res)=>{
    
    const { id }=req.params;
    
    User.findById(id)
    .then((user)=>{
        console.log("SUCCEEDED GETTING SPECIFIC USER", user);
        res.status(200).json(user);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})

// [POST] New User


module.exports = server; // EXPORT YOUR SERVER instead of {}
