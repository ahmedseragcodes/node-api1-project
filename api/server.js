const express = require("express");
const cors = require("cors");
const Users = require("./users/model");

const server = express();

server.use(express.json());
server.use(cors());

//ENDPOINTS

//SANITY ENDPOINT 

server.get("/", (req, res, next)=>{
    res.json({message: "API UP"});
});

//[GET] All Users

server.get("/api/users", (req, res, next)=>{
    Users.find()
    .then((allUsers)=>{
        res.status(200).json(allUsers);
    })
    .catch((err)=>{
        res.status(500).json({message: "the users information could not be retrieved"});
    });
});

//[GET] User By Id

server.get("/api/users/:id", (req, res, next)=>{
    
    const { id } = req.params;
    
    Users.findById(id)
    .then((specificUser)=>{
        if(!specificUser){
            res.status(404).json({message: "The user with the specified ID does not exist"});
        } else {
            res.status(200).json(specificUser);
        }
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
});

//[POST] New User

server.post("/api/users", (req, res, next)=>{

    const { name, bio } = req.body;

    if(name && bio){
        Users.insert({name, bio})
        .then((newUser)=>{
            res.status(201).json(newUser);
        })
        .catch((err)=>{
            res.status(500).json({message: "There was an error while saving the user to the database"});
        })
    } else {
        res.status(400).json({message: "Please provide name and bio for the user"});
    }
})

//[PUT] / Update User

//[DELETE] User By Id

module.exports = server;
