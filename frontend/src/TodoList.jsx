// src/TodoList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/todos', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, [token]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/login', {
        password: 'abc',
      });
      setToken(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setToken('');
  };

  const handleCreateTodo = async () => {
    try {
      const response = await axios.post('http://localhost:5001/todos', {
        text: newTodo,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5001/todos/${id}`, {
        completed: true,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(todos.map((todo) => todo._id === id ? response.data : todo));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {token ? (
        <div>
          <h1>Todo List</h1>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleCreateTodo}>Create Todo</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo._id}>
                <Todo
                  todo={todo}
                  handleToggle={handleToggle}
                  handleDelete={handleDelete}
                />
              </li>
            ))}
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;