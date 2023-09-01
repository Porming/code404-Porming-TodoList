import React from 'react'
import EBTN from '../image/edit_btn.svg'
import DBTN from '../image/delete_btn.svg'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div>
        <ul>
          <li>
            <div className='show-task'>
              <div className='show-todo'>
                <input type='checkbox' className='checkbox' checked={task.completed} onChange={() => toggleComplete(task.id)}/>
                <label className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>{task.task}</label>
              </div>
              <div className='btn'>
                <button className='delete-btn' onClick={() => editTodo(task.id)}><img src={EBTN} alt='edit button'/></button>
                <button className='delete-btn' onClick={() => deleteTodo(task.id)}><img src={DBTN} alt='delete button'/></button>
              </div>
            </div>
          </li>
        </ul>
      
    </div>
  )
}
