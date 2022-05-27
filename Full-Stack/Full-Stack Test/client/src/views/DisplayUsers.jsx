import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const DisplayUsers = () => {
    const [users, setUsers] = useState("")
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/allUsers`, {withCredentials: true})
            .then(response=> setUsers(response.data))
            .catch()
    },[refresh])

    const handleLogout = ()=>{
        axios.get(`http://localhost:8000/api/logout`, {withCredentials: true})
            .then(response=>navigate("/registration"))
            .catch()
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>

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