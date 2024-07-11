import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
        <p className={`${task.completed ? "completed" : "incompleted"}`} // присваиваем название классу, в зависимости от параметра объекта
           onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
          <FontAwesomeIcon icon ={faPenToSquare}/>
          <FontAwesomeIcon icon ={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
