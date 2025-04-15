import React from 'react'
import { useState } from 'react'
import '../styles/todo.css'

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [inputDate, setInputDate] = useState('');


  return (
    <div className='todo-container'>
      <h2>Tasks</h2>
      <h3>Name</h3>
      <input type='text' value={inputTask} onChange={(e) => setInputTask(e.target.value)}></input>
      <h3>Date</h3>
      <input type='date' value={inputDate} onChange={(e) => setInputDate(e.target.value)}></input>
      <p>This is your task list section.</p>
    </div>
  )
}

export default TodoApp
