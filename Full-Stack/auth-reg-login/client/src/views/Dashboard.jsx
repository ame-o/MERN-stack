import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DisplayEvents from '../components/DisplayEvents'
import { useHistory, Link } from 'react-router-dom'
import Header from '../components/Header'

const Dashboard = () => {
  const [events,setEvents] = useState([]);
  const [refresh, setRefresh] = useState(true)
  const history = useHistory()

  useEffect(()=>{
      axios.get(`http://localhost:8000/api/events`, { withCredentials: true })
          .then(response=>{
            setEvents(response.data)
          })
          .catch(err=>console.log(err))
  }, [refresh])

  
  const logoutHandler = ()=>{
    axios.get(`http://localhost:8000/api/users/logout`, {withCredentials: true})
        .then(res=>history.push("/"))
        .catch()
  }
  const reload = () => {
      setRefresh(!refresh)
  }
  return (
    <div>
        <Header/>
      <div>
            <button onClick={logoutHandler}>Logout</button>
        Dashboard
        <DisplayEvents  events={events} reloadList = {reload} />
      </div>
      <div>
        Bottom
      </div>
    </div>
  )
}

export default Dashboard