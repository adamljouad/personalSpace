import React from 'react'
import '../styles/dashboard.css'

function Header({toggleSidebar}) {
  return (
    <div className="header">
      <button onClick={toggleSidebar} >☰</button>
      <h1>FocusFlow</h1>
    </div>
  )
}

export default Header
