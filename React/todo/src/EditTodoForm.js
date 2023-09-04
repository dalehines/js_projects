import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
const [value,setValue] = useState(task.task);

const handleChange = (event) => {
  setValue(event.target.value);
  }
  
const handleSubmit = event =>{
  event.preventDefault();
  editTodo(value, task.id);
  setValue("");
}


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={handleChange}/>
    <button type='submit' className='todo-btn'>
      Update Task
    </button>
    </form>
  )
}

export default EditTodoForm