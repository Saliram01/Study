import React from 'react'
import { useState } from 'react';
import Button from '../atoms/button/Button'
import Input from '../atoms/input/Input'
import TodoList from '../organism/TodoList';

function TodoTemplate() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text, completed: false },
      ]);
      setText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </div>
    );
}

export default TodoTemplate
