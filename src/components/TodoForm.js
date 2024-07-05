import React from 'react'
import {
    useState
 } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState(""); // объявляем переменную состояния, setVAlue вызывает повторный рендеринг

    // Функция-обработчик, срабатывающая на button submit
    const handleSubmit = e => {
        e.preventDefault(); // чтоб не перезагружалась страница

        addTodo(value); // передадим state из todo form в todo wrapper
    }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text'className='todo-input' placeholder='Какая задача сегодня'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Добавить задачу</button>
    </form>  
  )
}
