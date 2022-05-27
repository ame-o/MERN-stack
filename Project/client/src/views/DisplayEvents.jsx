import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import {useAppContext} from '../contextLib'
import Header from '../components/Header';

const DisplayEvents = () => {
    // const {loggedUser} = useAppContext();?
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
            <Header/>            
        <br/>
        <p className='title'>All Events...</p>
        {events&&events.map((event,i)=>(
            <table className='table'>
                <tbody>
                    <tr key ={i}>
                        <td>{event.title}</td>
                        <td>{event.description} </td>
                        <td>
                        <Link to={`/events/view/${event._id}`}> View </Link>
                        <Link to={`/events/edit/${event._id}`}> Update </Link>
                        <button onClick={()=>handleDelete(event._id)}>Delete </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        ))

    }

    </div>
    )
}

export default DisplayEvents