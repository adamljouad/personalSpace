import React from 'react'
import { useState } from 'react'
import '../styles/todo.css'

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');

  const getDay = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  }

  const mondayTask = tasks.filter(task => getDay(task.date) === 'Monday');
  const tuesdayTask = tasks.filter(task => getDay(task.date) === 'Tuesday');

  

  const addTasks = () => {
    if (inputName === '') {
      alert('Riempi i campi obbligatori')
    } else {
      setTasks((prev) => [...prev, {
        name: inputName,
        date: inputDate
      }])
      console.log(mondayTask)
    }
  }


  return (
    <div className='todo-container'>
      <h2>Tasks</h2>
      <h4>Name</h4>
      <input type='text' value={inputName} onChange={(e) => setInputName(e.target.value)}></input>
      <h4>Date</h4>
      <input type='date' value={inputDate} onChange={(e) => setInputDate(e.target.value)}></input>
      <button onClick={addTasks}>Add Task</button>
      <div className='todo-list'>
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                {task.name} - {task.date}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoApp
