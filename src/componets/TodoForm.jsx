import React from 'react'
import { useState } from 'react'

export const TodoForm = ({addTodo}) =>{
  const [value, setValue] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(value){
      // add todo
      addTodo(value);
      // clear form after submission
      setValue('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='input-form'>
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='What do you want to do?' />
          <button type='submit'>Create</button>
      </form>
    </>
  )
}
