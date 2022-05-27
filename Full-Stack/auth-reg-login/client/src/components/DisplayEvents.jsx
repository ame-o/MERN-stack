import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayEvents = () => {
    const [events,setEvents] = useState([]);
    const [refresh, setRefresh] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/events`, { withCredentials: true })
            .then(response=>{
                setEvents(response.data)
            })
            .catch(err=>{
                console.log(err)
                if (err.response.status === 401) {
                    console.log("UNAUTHORIZED")
                  }
                  else if (err.response.status === 400) {
                    console.log("BAD REQUEST")
                  }
            })
    }, [refresh])

    const handleDelete =(deleteId) =>{
        axios.delete(`http://localhost:8000/api/events/delete/${deleteId}`)
            .then(response=>{
                const filteredList = events.filter((event, i)=>event._id !== deleteId)
                setEvents(filteredList)
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>            
        <br/>
        {events&&events.map((event,i)=>(
            <ul key ={i}>
                <li>{event.title}
                <Link to={`/events/view/${event._id}`}> View </Link>
                <Link to={`/events/edit/${event._id}`}>Update </Link>
                <button onClick={()=>handleDelete(event._id)}>Delete </button></li>
            </ul>
        ))

    }

    </div>
    )
}

export default DisplayEvents