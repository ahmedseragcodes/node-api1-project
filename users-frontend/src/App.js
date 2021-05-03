import axios from "axios";
import React, { useState, useEffect } from "react";



function App() {

const [users, setUsers] = useState([]);

useEffect(()=>{
  axios.get("http://localhost:5678/api/users")
  .then((res)=>{
    console.log("SUCCEEDED GETTING USERS", res);
  })
  .catch((err)=>{
    console.log("FAILED TO GET USERS", err);
  })
})

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

export default App;
