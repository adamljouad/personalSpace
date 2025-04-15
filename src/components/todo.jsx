import React from 'react'
import { useState } from 'react'
import '../styles/todo.css'

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');

  const addTasks = () => {
    if (inputName === '') {
      alert('Riempi i campi obbligatori')
    } else {
      setTasks((prev) => [...prev, {
        name: inputName,
        date: inputDate
      }])
    }
  }


  return (
    <div className='todo-container'>
      <h2>Tasks</h2>
      <h3>Name</h3>
      <input type='text' value={inputName} onChange={(e) => setInputName(e.target.value)}></input>
      <h3>Date</h3>
      <input type='date' value={inputDate} onChange={(e) => setInputDate(e.target.value)}></input>
      <button onClick={addTasks}>Add Task</button>
      <p>This is your task list section.</p>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task.name} - {task.date}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoApp
