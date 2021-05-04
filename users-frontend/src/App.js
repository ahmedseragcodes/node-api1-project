import axios from "axios";
import React, { useState, useEffect } from "react";



function App() {

const [users, setUsers] = useState([]);

useEffect(()=>{
  axios.get("http://localhost:5678/api/users")
  .then((res)=>{
    console.log("SUCCEEDED GETTING USERS", res);
    setUsers(res.data);
  })
  .catch((err)=>{
    console.log("FAILED TO GET USERS", err);
  })
},[])

  return (
    <div>
      <h1>Users</h1>
      {
        users.map((user)=>{
          return (
            <div>
              <p>Name: {user.name}</p>
              <p>Bio: {user.bio}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
