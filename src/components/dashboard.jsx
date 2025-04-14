import React from 'react'
import Sidebar from './sidebar'
import { Route, Routes } from 'react-router-dom'
import TodoApp from './todo'
import JournalApp from './journal'
import CalendarApp from './calendar'
import Header from './header'
import '../styles/dashboard.css'

function Dashboard() {
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <h1>Ciao</h1>
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

