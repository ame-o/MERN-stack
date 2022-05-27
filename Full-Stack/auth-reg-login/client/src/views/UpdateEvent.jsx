import React, {useState,useEffect} from 'react'
import { useParams,useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'

const Update = () => {
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [url, setUrl] = useState("")
    const [longtitude, setLongtitude] = useState("")
    const [latitude, setLatitude] = useState("")
    const {id} = useParams()
    
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/events/${id}`)
        .then(response=>{
        const event = response.data
        setTitle(event.title)
        setDescription(event.description)
        setCategory(event.category)
        setDate(event.date)
        setCity(event.city)
        setCountry(event.country)
        // setUser(event.user)
        setUrl(event.url)
        setLongtitude(event.longtitude)
        setLatitude(event.latitude)
    })
        .catch(err=>console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/events/${id}`,{title,description,category,date,city,country,url,longtitude,latitude}, {withCredentials:true})
            .then(response=>history.push(`/events`))
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
      const handleDelete =() =>{
        axios.delete(`http://localhost:8000/api/events/${id}`)
            .then(response=>{
                history.push('/events')
            })
            .catch(err=>console.log(err))
    }
    
  return (
    <div>
    <Header/>
    <form onSubmit={handleSubmit}>
        <div>
        <label> Title</label>
        <input name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div>
        <label> Description</label>
        <input name="description" value={description} onChange={e=>setDescription(e.target.value)}/>
        </div>
        <div>
        <label> Category </label>
        <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
            <option type="hidden" placeholder='Pick One'/>
            <option value="flight"> Flight </option>
            <option value="activity"> Activity </option>
            <option value="stay"> Stay </option>
            <option value="food"> Food </option>
        </select> 
        </div>
        <div>
        <label> Date </label>
        <input type="date" name="date" value={date}  onChange={e=>setDate(e.target.value)}/>
        </div>
        <div>
        <label> City </label>
        <input name="city" value={city}  onChange={e=>setCity(e.target.value)}/>
        </div>
        <div>
        <label> Country</label>
        <input name="country" value={country}  onChange={e=>setCountry(e.target.value)}/>
        </div>
        {/* <div>
        <label> User</label>
        <input name="user" value={user}  onChange={e=>setUser(e.target.value)}/>
        </div> */}
        <div>
        <label> URL/Link </label>
        <input name="url" value={url}  onChange={e=>setUrl(e.target.value)}/>
        </div>
        <div>
        <label> Longtitude</label>
        <input name="longtitude" value={longtitude}  onChange={e=>setLongtitude(e.target.value)}/>
        </div>
        <div>
        <label> Latitude </label>
        <input name="latitude" value={latitude}  onChange={e=>setLatitude(e.target.value)}/>
        </div>
        <button type="submit">Update </button>
        <Link to="/"> Cancel</Link>
        <button onClick={()=>handleDelete()}>Delete </button>
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