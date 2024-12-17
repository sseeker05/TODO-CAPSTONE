// import React from 'react'
import React,  { userstate } from 'react'
import axios from 'axios'

const Create = () => {
  const [task, setTodo] = React.useState('')
  const handleAdd = () => {
    axios.post('http://localhost:5001/add', {task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
      
  
  }
  return (
    <div className='create_form'>
      <input type="text" className="" placeholder='Enter task' 
      onChange={(e) => setTask(e.target.value)} />
      <button type='button' onClick={handleAdd}>Add</button>

    </div>
  )
}

export default Create