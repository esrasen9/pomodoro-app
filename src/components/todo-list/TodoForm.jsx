import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import nextId from 'react-id-generator';
import { useStateValue } from '../Context';

function TodoForm() {
  const [newTodo, setNewTodo] = useState({});
  const { todos, setTodos } = useStateValue();

  const saveLocalTodos = (todo) => {
    let localTodos;
    if (localStorage.getItem('todos') === null) {
      localTodos = [];
    } else {
      localTodos = JSON.parse(localStorage.getItem('todos'));
    }
    localTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(localTodos));
  };

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    saveLocalTodos(newTodo);
    setNewTodo({ text: '' });
  };

  return (
    <div data-testid="todo-list-form" className="todo-form">
      <input
        data-testid="add-todo-input"
        value={newTodo.text}
        onChange={(e) => setNewTodo({ text: e.target.value, id: nextId() })}
        className="add-todo-input"
        type="text"
        placeholder="Add new task"
      />
      <button
        type="button"
        data-testid="plus-button"
        onClick={addTodo}
        className="plus-button"
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
}

export default TodoForm;
