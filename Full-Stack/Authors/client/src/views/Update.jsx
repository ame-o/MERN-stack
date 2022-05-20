import React, {useState,useEffect} from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Update = (props) => {
    const [name,setName] = useState("")
    const [errors, setErrors] = useState([])
    const [refresh, setRefresh] = useState(true)
    const navigate = useNavigate()
    const {id} = useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response=>{
            const author = response.data
            setName(author.name)
        })
            .catch(err=>console.log(err))
        },[])

const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/authors/${id}`,{name})
        .then(response=>navigate("/"))
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
  const clearForm = () => {
    setName("")
    }
    const handleDelete =()=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
          .then(response=>navigate(`/authors`))
          .catch()
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

export default Update