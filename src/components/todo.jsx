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
    const grouped = tasks.reduce((acc, task) => {
      const day = getDay(task.date);
      if (!acc[day]) acc[day] = [];
      acc[day].push(task);
      return acc;
    }, {});
    setTasksByDay(grouped);
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
      <input
        type='date'
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        min={minDate}
        max={maxDate}
      />
      <button onClick={addTask}>Add Task</button>

      <div className='button-container'>
        {days.map((day) => (
          <div key={day} style={{position: 'relative'}} className='button-for-badge'>
            {today === day && <div className='due-badge'>Due Today</div>}
            <button
              className='day-button'
              onClick={() => setActiveDay((prev) => (prev === day ? null : day))}
            >
              {day}
            </button>
          </div>
        ))}
      </div>

      <div className={`task-box ${activeDay ? 'task-box-open' : ''}`}>
        {activeDay && (
          <>
          <div className='todo-list fade-in'>
            <h4>{activeDay}</h4>
            {today === activeDay && <span className='due-today'>Due Today</span>}
            {(tasksByDay[activeDay] || []).map((task) => (
              <div key={task.id} className='task-item'>
                {task.name}
                <div className='task-date'>{task.date}</div>
                <button className='finished-button' onClick={() => removeTask(task.id)}>Finished</button>
              </div>
            ))}
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
