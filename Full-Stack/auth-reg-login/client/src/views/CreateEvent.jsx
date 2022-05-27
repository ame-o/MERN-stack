import React, {useState} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import Header from '../components/Header'
import {useAppContext} from '../'

const CreateEvent = () => {
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [url, setUrl] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/events`, {title,description,category,date,city,country,url,longitude,latitude}, {withCredentials:true})
            .then(res=>{
                console.log(res.data)
                history.push('/events')
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
        <input type ='hidden' name="user" value={user}  onChange={e=>setUser(e.target.value)}/>
        </div> */}
        <div>
        <label> URL/Link </label>
        <input name="url" value={url}  onChange={e=>setUrl(e.target.value)}/>
        </div>
        <div>
        <label> Longitude</label>
        <input name="longtitude" value={longitude}  onChange={e=>setLongitude(e.target.value)}/>
        </div>
        <div>
        <label> Latitude </label>
        <input name="latitude" value={latitude}  onChange={e=>setLatitude(e.target.value)}/>
        </div>
        <button type="submit">Create</button>
        <Link to="/"> Cancel</Link>
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

export default CreateEvent