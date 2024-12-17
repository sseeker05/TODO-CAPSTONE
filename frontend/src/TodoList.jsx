import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import "./App.css";

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
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto p-4 mt-12 bg-white rounded-lg shadow-md">
        {token ? (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="w-3/4 p-2 text-lg border border-gray-400 rounded-lg"
              />
              <button
                onClick={handleCreateTodo}
                className="w-1/4 p-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
              >
                Create Todo
              </button>
            </div>
            <ul>
              {todos.map((todo) => (
                <li key={todo._id} className="flex items-center mb-2">
                  <Todo
                    todo={todo}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                  />
                </li>
              ))}
            </ul>
            <button
              onClick={handleLogout}
              className="p-2 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
            <button
              onClick={handleLogin}
              className="p-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;