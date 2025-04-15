import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

function Sidebar({isOpen}) {
  return (
    <div className={`sidebar ${!isOpen ? 'hidden' : ''}`}>
      <Link to="/tasks">Tasks</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/calendar">Calendar</Link>
    </div>
  )
}

export default Sidebar