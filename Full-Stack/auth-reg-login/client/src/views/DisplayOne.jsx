import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';


const DisplayOne = () => {
    const {id} = useParams()
    const [event,setEvent]= useState()
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/events/${id}`)
        .then(response=> setEvent(response.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <Header/>
        
        {
            event&&
            <div>
    <h3> event Title- {event.title} </h3>
    <h3>Price- {event.price}</h3>
    <h3> Description- {event.description} </h3>
        </div>
        }
    </div>
  )
}

export default DisplayOne