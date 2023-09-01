import React from 'react'
import { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id)
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='input-form edit-form'>
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Update task' />
          <button type='submit' className='edit-btn'>Edit</button>
        </form> 
    </>
  )
}

