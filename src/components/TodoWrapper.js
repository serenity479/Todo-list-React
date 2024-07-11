import React, {useState} from 'react'
import {TodoForm} from './TodoForm'
import { v4 as uuidv4} from 'uuid'
import {Todo} from './Todo';


export const TodoWrapper = () => {

  const [todos, setTodos] = useState([]); // объявляем переменную состояния, setTodos вызывает повторный рендеринг

  // добавление задачи
  const addTodo = todo => {
      setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false }])
      console.log(todos);
  }

  // Отметка выполненной задачи
  const toggleComplete = id => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)); // проходимся по массиву todo и меняем значение completed у той, у которой id как у нажатой, если же нет, то возвращаем todo в таком же состоянии
  }


  // Удаление задачи
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id)) // удалит ту todo, у которой id совпадет с нажатой
  } 


  return (
    <div className='TodoWrapper'>
        <h1>To Do List</h1>
        <TodoForm addTodo={addTodo}/>
        { todos.map((todo, index) => (
            <Todo task={todo} key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}/>
        ))}  
       
    </div>  
  )
}
