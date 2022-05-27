import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, {withCredentials:true})
            .then(response=>navigate("/users"))
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
                </div>
               
                <button type = "submit"> Login </button>
            </form>
        </div>
    )
}

export default Login

