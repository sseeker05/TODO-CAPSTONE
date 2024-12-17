import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/add', { task })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Create;