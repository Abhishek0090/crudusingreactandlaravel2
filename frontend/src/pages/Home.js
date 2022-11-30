import React, { useEffect, useState } from 'react'
import http from '../http'
 

const Home = () => {
  const [user, setUsers] = useState('')
  // const baseURL = "http://localhost:8000/api";
  

  useEffect(()=>{
    fetchAllUsers();
},[]);

const fetchAllUsers = () => {
    http.get('/users').then(res=>{
        setUsers(res.data);
    })
}

    
    return (
    <div>
      <h2>User listing..</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {Array.from(user).map((user,index)=>{
          return( 
          <tr key={user.id}>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>edit</td> 
          </tr>
        )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Home