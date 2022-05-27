import React, { useState} from 'react'
import axios from "axios"

const Registration = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/register`, user, {withCredentials:true})
            .then(response=>{
                console.log(response.data)
                
            })
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={lastName} onChange={e=>setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
                </div>
                <button type ="submit"> Register </button>
            </form>
        </div>
    )
}

export default Registration