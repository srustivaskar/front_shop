import React,{useEffect, useInsertionEffect, useState} from 'react'

function User() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        async function  fetchUser(){
            const response = await
            fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)
        }
        fetchUser()
    }
    ,[]
)
  return (
    <div>
        <h1>Users</h1>
        <ul>
          {
            users.map(user =>(
              <li key={user.id}>
                <p>user name : {user.name}</p>
                <p>user email:{user.email}</p>
                <p>user username:{user.username}</p>
                </li>

            ))
          }
        </ul>
    </div>
  )
}


export default User
