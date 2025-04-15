import React from 'react'
import '../styles/dashboard.css'

function Header({toggleSidebar}) {
  return (
    <div className="header">
      <div className='sidebar-button'>
      <button onClick={toggleSidebar} >☰</button>
      </div>
      <h1>FocusFlow</h1>
    </div>
  )
}

export default Header
