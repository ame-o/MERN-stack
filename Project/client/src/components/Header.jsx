import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
  // const history = useHistory()
  // const logoutHandler = ()=>{
  //   console.log("logout")
  //   // axios.get(`http://localhost:8000/api/users/logout`, {withCredentials: true})
  //   //     .then(res=>history.push("/"))
  //       // .catch()
  // }
  
  return (
    <nav className='navbar has-background-primary-light'>
        {/* <div className='navbar-brand'> */}
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              {/* <Link className='button is-light' to="/">Main</Link> */}
              <Link className='button is-warning' to="/events">Dashboard</Link>
              <Link className='button is-primary' to="/events/create">Create Event</Link>
              <button className='button is-danger'>Logout</button>
            </div>
          </div>
        </div>
        </nav>
  )
}

export default Header