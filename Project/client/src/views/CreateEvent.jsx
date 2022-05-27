import React, {useState} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import Header from '../components/Header'
// import {useAppContext} from '../contextLib'

const CreateEvent = () => {
    // const {setLoggedUser} = useAppContext();
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [startDate, setStartDate] = useState("")
    // const [endDate, setEndDate] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [url, setUrl] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/events`, {title,description,category,startDate,city,country,url,longitude,latitude}, {withCredentials:true})
            .then(res=>{
                // localStorage.setItem("loggedUser", JSON.stringify(res.data.user))
                console.log(res.data)
                addEvent(res.data.startDate)
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
    
    const calendarEvents = []
    const addEvent = (e) =>{
      console.log('this is add event'+ e)
    }
    const addPin =(e) => {
      
    }

  return (
    <div>
    <Header/>
      <hr />
    <div className="container is-6">
    <div className="tile is-child box">
    <p className='title'>Create New Event</p>

    <form onSubmit={handleSubmit}>
        
        <div className="field">
                <p className="control has-icons-left has-icons-right">
        <label> Title</label>
                  <input className="input" name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
        
        
        <div className="field">
                <p className="control has-icons-left has-icons-right">
        Description
        <textarea className="textarea" placeholder='Description' name="description" value={description} onChange={e=>setDescription(e.target.value)} />
        <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>

                <div className='field is-grouped is-grouped-centered'>

                <div className="control has-icons-left has-icons-right">
  <div className="select">
        <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
            <option hidden> Category </option>
            <option value="activity🏃"> Activity 🏃</option>
            <option value="flight✈️"> Flight ✈️</option>
            <option value="food🍰"> Food 🍰 </option>
            <option value="stay🛌"> Stay 🛌</option>
        </select> 
        <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>



        <label> Start Date </label>

                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="date" name="startDate" value={startDate}  onChange={e=>setStartDate(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                    </p>

        {/* <label>End Date </label>

                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="date" name="endDate" value={endDate}  onChange={e=>setEndDate(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>*/}
                </div> 

        <label> City </label>
        <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" name="city" value={city}  onChange={e=>setCity(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>

        <label> Country</label>
        <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" name="country" value={country}  onChange={e=>setCountry(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>

        {/* <div>

        <input type ='hidden' name="user" value={setLoggedUser}/>
        </div> */}

        <label> URL/Link </label>
        <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" name="url" value={url}  onChange={e=>setUrl(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>

        <label> Longitude</label>
        <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" name="longtitude" value={longitude}  onChange={e=>setLongitude(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>

        <label> Latitude </label>
        <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" name="latitude" value={latitude}  onChange={e=>setLatitude(e.target.value)}/>
                  <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
<div className='field is-grouped is-grouped-centered'>
        <button className='button is-success' type="submit">Create</button>
        <Link className='button is-warning' to="/events"> Cancel</Link>
        </div>
    </form>
{
    errors.map((err, i)=>{
        return(
            <p key={i} style={{color: "red"}}> {err} </p>
        )
    })
}
</div>
</div>
</div>
  )
}

export default CreateEvent