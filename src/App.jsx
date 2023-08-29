import './App.css'
import EBTN from './image/edit_btn.svg'
import DBTN from './image/delete_btn.svg'

function App() {

  return (
    <>
      <div className="app">
        <div className='title'>
          <h1>To Do List</h1>
        </div>
        <form className='input-form'>
          <input type="text" placeholder='What do you want to do?' />
          <button type='submit'>Create</button>
        </form>
        <ul>
          <li>
            <div className='show-task'>
              <div className='show-todo'>
                <input type='checkbox' className='checkbox' />
                <label>Python</label>
              </div>
              <div className='btn'>
                <button className='delete_btn' ><img src={EBTN} alt='edit button'/></button>
                <button className='delete_btn' ><img src={DBTN} alt='delete button'/></button>
              </div>
            </div>
          </li>
        </ul>
        <div className='footer'>
          <p>You have 0 task to do</p>
        </div>
      </div>
    </>
  )
}

export default App
