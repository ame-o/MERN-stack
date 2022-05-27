import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useHistory, Link } from 'react-router-dom'

const DisplayUsers = () => {
    const [users, setUsers] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const history = useHistory()
 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/users/allUsers`, {withCredentials: true})
            .then(res=> setUsers(res.data))
            .catch()
    },[refresh])

    const logoutHandler = ()=>{
        axios.get(`http://localhost:8000/api/users/logout`, {withCredentials: true})
            .then(res=>history.push("/"))
            .catch()
    }

    return (
        <div>
            <button onClick={logoutHandler}>Logout</button>

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>email</td>
                        <td>password</td>
                    </tr>
                </thead>
                <tbody>
                    {users&&users.map((user, i)=>(
                        <tr key={i}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayUsers