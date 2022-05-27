import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import ViewCalendar from '../components/ViewCalendar'
// import {useAppContext} from '../contextLib'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import Error from '../components/mapcomponents/Error'


const Dashboard = () => {
  // const {loggedUser} = useAppContext();
  const [events,setEvents] = useState([]);
  const [refresh, setRefresh] = useState(true)
  const history = useHistory()

  //get all events
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

const reload = () => {
  setRefresh(!refresh)
}


  return (
    <div>
      <Header/>
      <section className='section has-background-black'>
        Dashboard

        <div class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
          <p className='title has-text-primary'>All Events...</p>
          <br />
        {
          events&&events.map((event,i)=>(
            <table className='table is-narrow is-fullwidth has-text-primary-light has-background-dark'>
                <tbody>
                    <tr key ={i}>
                        <td>{event.title} </td>
                        <td>{event.category} </td>
                        <td>{event.description} </td>
                        <td>
                        <Link className='has-text-primary' to={`/events/view/${event._id}`}> View </Link> |
                        <Link className='has-text-warning' to={`/events/edit/${event._id}`}> Update </Link>
                        {/* <button onClick={()=>handleDelete(event._id)}>Delete </button> */}
                        </td>
                    </tr>
                </tbody>
            </table>
                    ))
                  }

    </div>
  </div>
  </div>


      <div className='container'>
        
        <ViewCalendar events = {events} reloadList= {reload} />
      </div>

      <div className='container is-max-desktop'>
      {/* <div className='columns '>
        
        <div className='column is-half'> */}
          google maps api?
          <Error/>
        </div>
      </section>
    </div>
  )
}

export default Dashboard