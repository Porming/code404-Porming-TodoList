import React from 'react'
import { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { EditTodoForm } from './EditTodoForm'
import { v4 as uuidv4 } from "uuid";


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <>
        <div className='title'>
          <h1>ToDo List</h1>
        </div>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo) => 
         todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
         ) : (
          <Todo 
          key ={todo.id}
          task={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
          />
         )
        )}

        <div className='footer'>
          <p>{todos.length > 1 ? `You have ${todos.length} tasks todo` : `You have ${todos.length} task todo`}</p>
        </div>

    </>
  )
}
