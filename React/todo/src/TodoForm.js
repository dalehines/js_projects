import React, {useState} from 'react'

const TodoForm = () => {
const [value,setValue] = usestate("");

const handleChange = (event) => {
  setValue(event.target.value);
}

const handleSubmit = event =>{
  event.preventDefault();
}


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' className='todo-input' placeholder='What is the task today' onChange={handleChange}/>
    <button type='submit' className='todo-btn'>
      Add Task
    </button>
    </form>
  )
}

export default TodoForm