import React, {useState} from 'react'
import {TodoForm} from './TodoForm'
import { v4 as uuidv4} from 'uuid';


export const TodoWrapper = () => {

  const [todos, setTodos] = useState([]); // объявляем переменную состояния, setTodos вызывает повторный рендеринг

  const addTodo = todo => {
      setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false }])
      console.log(todos);
  }

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>  
    </div>  
  )
}
