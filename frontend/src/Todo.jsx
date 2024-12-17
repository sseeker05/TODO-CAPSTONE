import React from 'react';

const Todo = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo._id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => handleDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default Todo;