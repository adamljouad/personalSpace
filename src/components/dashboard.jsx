import React from 'react'
import { useState } from 'react'
import Sidebar from './sidebar'
import { Route, Routes } from 'react-router-dom'
import TodoApp from './todo'
import JournalApp from './journal'
import CalendarApp from './calendar'
import Header from './header'
import '../styles/dashboard.css'

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)


  return (
    <>
      <div className='header'>
      </div>
      <div className="dashboard">
        <Sidebar isOpen={sidebarOpen}/>
        <div className="content">
          <Header toggleSidebar={() => setSidebarOpen(prev => !prev)} />
          <Routes>
            <Route path="/tasks" element={<TodoApp />} />
            <Route path="/journal" element={<JournalApp />} />
            <Route path="/calendar" element={<CalendarApp />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Dashboard

