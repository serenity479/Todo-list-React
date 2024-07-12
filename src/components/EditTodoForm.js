import React from 'react'
import {
    useState
 } from 'react'

export const EditTodoForm = ({editTask, task}) => {
    const [value, setValue] = useState(task.task); // объявляем переменную состояния, setVAlue вызывает повторный рендеринг

    // Функция-обработчик, срабатывающая на button submit
    const handleSubmit = e => {
        e.preventDefault(); 
        editTask(value, task.id); 
        setValue(""); 
    }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text'className='todo-input' value={value} placeholder='Измените задачу'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Изменить задачу</button>
    </form>  
  )
}
