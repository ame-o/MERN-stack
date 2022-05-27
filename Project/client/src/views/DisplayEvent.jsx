import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import ViewCalendar from '../components/ViewCalendar';

const DisplayEvent = () => {
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
      <hr />
      {
          event&&
          <div className='card'>

 <p className='title'>{event.title}</p>
 <br />
  <p className='subtitle'>{event.description}</p>
 <p className='subtitle'>  {event.category}</p>
 <p className='subtitle'> {event.startDate}- {event.endDate}</p>
 <p className='subtitle'> {event.city}, {event.country}</p>
 <p className='subtitle'> longitude: {event.longitude},latitude: {event.latitude}</p>
 <p className='subtitle'> <Link to={event.url}> Website Link </Link></p>
<Link className='button is-warning' to={`/events/edit/${event._id}`}> Update </Link>
<br />
<br />
      </div>
      }
      <ViewCalendar/>
  </div>
)
}

export default DisplayEvent