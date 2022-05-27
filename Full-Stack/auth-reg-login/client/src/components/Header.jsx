import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>Header
        <div>
          <Link to="/">| Main |</Link>
          <Link to="/events"> Dashboard | </Link>
          <Link to="/events/create"> Create Event |</Link>
        </div>
        
    </div>
  )
}

export default Header