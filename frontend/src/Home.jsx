import React, { useEffect } from 'react'
import Create from './Create'
import axios from 'axios'


const Home = () => {
  const [todos, setTodos] = React.useState([])
  useEffect(() => {
    axios.get('http://localhost:5001/')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  })
  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create />
      {
        todos.length === 0 ? <p>No todos yet</p> :
        todos.map((todo) => {
          <div className='task'>
            {todo.task}
          </div>
        })
      }
    </div>
  )
}

export default Home
