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

server.post("/api/users", (req, res)=>{
    const newUser = req.body;

    User.insert(newUser)
    .then((addedUser)=>{
        if(!addedUser.name || !addedUser.bio){
            res.status(404).json({message: "Name & Bio are required"});
        } else {
            console.log("SUCCEEDED POSTING ADDED USER", addedUser);
            res.status(201).json(addedUser);
        }
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})

//[PUT] Update User

server.put("/api/users/:id", (req, res)=>{

    const { id }=req.params;
    const changes = req.body;

    User.update(id, changes)
    .then((updatedUser)=>{
        console.log(updatedUser);
        res.status(201).json(updatedUser);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message})
    })


})


module.exports = server; // EXPORT YOUR SERVER instead of {}
