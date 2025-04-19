import React, { useState, useEffect } from 'react';
import '../styles/todo.css';

function TodoApp() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [activeDay, setActiveDay] = useState(null);
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [tasksByDay, setTasksByDay] = useState({});

  useEffect(() => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 6);

    const formatDate = (date) => date.toISOString().split('T')[0];
    setMinDate(formatDate(today));
    setMaxDate(formatDate(nextWeek));
  }, []);

  const getDay = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const getTodayDay = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { weekday: 'long' });
  };

  useEffect(() => {
    const updatedTasksByDay = {
      Monday: tasks.filter((task) => getDay(task.date) === 'Monday'),
      Tuesday: tasks.filter((task) => getDay(task.date) === 'Tuesday'),
      Wednesday: tasks.filter((task) => getDay(task.date) === 'Wednesday'),
      Thursday: tasks.filter((task) => getDay(task.date) === 'Thursday'),
      Friday: tasks.filter((task) => getDay(task.date) === 'Friday'),
      Saturday: tasks.filter((task) => getDay(task.date) === 'Saturday'),
      Sunday: tasks.filter((task) => getDay(task.date) === 'Sunday'),
    };
    setTasksByDay(updatedTasksByDay);
    console.log(todayDate())
  }, [tasks]);

  const addTask = () => {
    if (!inputName.trim() || !inputDate) return alert('Riempi i campi obbligatori');
    const newTask = { id: Date.now(), name: inputName, date: inputDate };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setInputName('');
    setInputDate('');
  };

  const removeTask = (taskId) => {
    const updated = tasks.filter((task) => task.id !== taskId);
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = getTodayDay();

  return (
    <div className='todo-container'>
      <h2>Tasks</h2>
      <h4>Name</h4>
      <input
        type='text'
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <h4>Date</h4>
      <input type='date' value={inputDate} onChange={(e) => setInputDate(e.target.value)}
      min={minDate} max={maxDate}></input>
      <button onClick={addTasks}>Add Task</button>
      <div className='todo-days'>
      <div className='todo-list'>
        <h4>Monday</h4>
        {todayDate() === 'Monday' && <span>Due Today</span>}
        {tasksByDay.Monday.map((task, index) => (
          <div key={index} className='task-item'>
            {task.name}
            <div className='task-date'>
              {task.date}
            </div>
            <button className='finished-button'>Finished</button>
          </div>
        ))}
      </div>
      <div className='todo-list'>
        <h4 className='day-title'>Tuesday</h4>
        {todayDate() === 'Tuesday' && <span className='due-today'>Due Today</span>}
        {tasksByDay.Tuesday.map((task, index) => (
          <div key={index} className='task-item'>
            {task.name}
            <div className='task-date'>
              {task.date}
            </div>
            <button className='finished-button'>Finished</button>
          </div>
        ))}
      </div>
      <div className='todo-list'>
        <h4 className='day-title'>Wednesday</h4>
        {todayDate() === 'Wednesday' && <span className='due-today'>Due Today</span>}
        {tasksByDay.Wednesday.map((task, index) => (
          <div key={index} className='task-item'>
            {task.name}
            <div className='task-date'>
              {task.date}
            </div>
          </div>
        ))}
      </div>
      <div className='todo-list'>
        <h4 className='day-title'>Thursday</h4>
        {todayDate() === 'Thursday' && <span className='due-today'>Due Today</span>}
        {tasksByDay.Thursday.map((task, index) => (
          <div key={index} className='task-item'>
            {task.name}
            <div className='task-date'>
              {task.date}
            </div>
            <button className='finished-button'>Finished</button>
          </div>
        ))}
      </div>
      <div className='todo-list'>
        <h4 className='day-title'>Friday</h4>
        {todayDate() === 'Friday' && <span className='due-today'>Due Today</span>}
        {tasksByDay.Friday.map((task, index) => (
          <div key={index} className='task-item'>
            {task.name}
            <div className='task-date'>
              {task.date}
            </div>
            <button className='finished-button'>Finished</button>
          </div>
        ))}
      </div>
      <div className='todo-list'>
        <h4 className='day-title'>Saturday</h4>
        {todayDate() === 'Saturday' && <span className='due-today'>Due Today</span>}
        {tasksByDay.Saturday.map((task, index) => (
          <div key={index} className='task-item'>
            {task.name}
            <div className='task-date'>
              {task.date}
            </div>
            <button className='finished-button'>Finished</button>
          </div>
        ))}
      </div>
      <div className='todo-list'>
        <h4 className='day-title'>Sunday</h4>
        {todayDate() === 'Sunday' && <span className='due-today'>Due Today</span>}
        {tasksByDay.Sunday.map((task, index) => (
          <div key={index} className='task-item'>
            {task.name}
            <div className='task-date'>
              {task.date}
            </div>
            <button className='finished-button'>Finished</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default TodoApp;
