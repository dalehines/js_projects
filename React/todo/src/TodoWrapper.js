import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {Todo} from './Todo';

const TodoWrapper = () => {
 // State variables
  const [todos,setTodos] = useState([]);

 const addTodo = todo => {
  setTodos([...todos,{
    id: crypto.randomUUID(), 
    task: todo, 
    completed:false, 
    isEditing: false}])
    console.log(todos)
 }

 const toggleComplete = id => {
    setTodos(todos.map( todo => todo.id === id?))
 }

  return (
    
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
    <TodoForm addTodo={addTodo}/>
     {todos.map((todo,index) => (
      <Todo task={todo} key={index} toggleComplete={toggleComplete}/>
    ))} 
     
    
    
    </div>
    
    
  )
}

export default TodoWrapper