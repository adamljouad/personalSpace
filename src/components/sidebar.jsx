import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

function Sidebar({isOpen}) {
  return (
    <div className={`sidebar ${!isOpen ? 'hidden' : ''}`}>
      <button><Link to="/tasks">Tasks</Link></button>
      <button><Link to="/journal">Journal</Link></button>
      <button><Link to="/journal">Calendar</Link></button>
    </div>
  )
}

export default Sidebar