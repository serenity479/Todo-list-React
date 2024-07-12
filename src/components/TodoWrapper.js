import React, {useState} from 'react'
import {TodoForm} from './TodoForm'
import { v4 as uuidv4} from 'uuid'
import {Todo} from './Todo';
import { EditTodoForm } from './EditTodoForm';


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

  // Появление формы изменения задачи
  const editTodo = id => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)) // активирует isEditing у нужного элемента todo 
  }

  // Изменение задачи
  const editTask = (task,id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)) // запишем значение в нужный элемент todo
  }

  return (
    <div className='TodoWrapper'>
        <h1>To Do List</h1>
        <TodoForm addTodo={addTodo}/>
        { todos.map((todo, index) => (
            // Здесь появляется форма изменения задачи если isEditing == true, иначе появляется сама задача 
            todo.isEditing ? (  
              <EditTodoForm editTask={editTask} task={todo}/> 
              ) : (
              <Todo task={todo} key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}/>
            )
        ))}  
       
    </div>  
  )
}
