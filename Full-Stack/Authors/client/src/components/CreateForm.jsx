import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateForm = () => {
    const [name,setName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    
const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/authors`,{name})
    .then(response=>{
        navigate('/')
      })
      .catch(err=>{
        const errArr =[]
        const errResData = err.response.data.errors
        console.log(errResData)
        for(const key in errResData){
            errArr.push(errResData[key]["message"])
        }
        setErrors(errArr)
    })
  }

    return (
    <div>
        <Link to={`/`}>Home</Link>
        <form onSubmit={handleSubmit}>
            <div>
            <label> Name</label>
            <input name="name" value={name} onChange ={e=>setName(e.target.value)}/>
            </div>
            <button type="submit">Create</button>
            <Link to="/" className='btn btn-light'> Cancel</Link>
        </form>
    {
        errors.map((err, i)=>{
            return(
                <p key={i} style={{color: "red"}}> {err} </p>
            )
        })
    }
        
    </div>
    )
}

export default CreateForm