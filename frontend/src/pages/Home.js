import React, { useEffect, useState } from 'react'
import http from '../http'
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState('')
  const baseURL = "http://localhost:8000/api";
  
  const fetchAllUser = ()=>{
    
    axios.get(baseURL).then((response) => {
      setUser(response.data);
    });
  }

    useEffect(() => {
      fetchAllUser();
    }, [])
     
    return (
    <div>
      <h2>User listing..</h2>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {user.map((user,index)=>{
 
          <tr key={user.id}>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>edit</td>
             
          </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Home