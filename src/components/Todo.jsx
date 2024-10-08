import React, { useState } from 'react';
import tickIcon from '../assets/tick.png'; // Adjust path if necessary
import deleteIcon from '../assets/delete.png'; // Adjust path if necessary

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
      <h1 className='text-gray-800 text-3xl font-bold mb-4 text-center'>To-Do List</h1>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className='p-2 w-full mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
        placeholder='Add a new task...'
      />
      <button
        onClick={handleAddTask}
        className='bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-500 transition duration-200'
      >
        Add Task
      </button>
      <ul className='list-none'>
        {tasks.map(({ id, text, completed }) => (
          <li key={id} className={`flex justify-between items-center mb-2 p-2 rounded-lg ${completed ? 'bg-green-100' : 'bg-gray-50'}`}>
            <span
              onClick={() => handleToggleTask(id)}
              className={`cursor-pointer flex items-center ${completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
            >
              <img 
                src={completed ? tickIcon : null} 
                alt="Tick Icon" 
                className={`w-5 h-5 mr-2 transition-opacity ${completed ? 'opacity-100' : 'opacity-0'}`}
              />
              {text}
            </span>
            <button
              onClick={() => handleDeleteTask(id)}
              className='bg-transparent border-0 cursor-pointer'
            >
              <img src={deleteIcon} alt="Delete Icon" className='w-5 h-5' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
