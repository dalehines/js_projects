import React, {useState} from 'react'
import TodoForm from './TodoForm'

const TodoWrapper = () => {
 // State variables
  const [todos,setTodos] = useState([])

 const addTodo = todo => {
  setTodos(...todos,{
    id: crypto.randomUUID(), 
    task: todo, 
    completed:false, 
    isEditing: false})
 }

  return (
    
    <div className='TodoWrapper'>

    <TodoForm addTodo={addTodo}/>
    </div>
    
    
  )
}

export default TodoWrapper