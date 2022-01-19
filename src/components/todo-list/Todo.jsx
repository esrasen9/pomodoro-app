import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { useStateValue } from '../Context';

function Todo({ todo }) {
  const { todos, setTodos } = useStateValue();
  const { id, text } = todo;

  const removeLocalTodos = () => {
    let localTodos;
    if (localStorage.getItem('todos') === null) {
      localTodos = [];
    } else {
      localTodos = JSON.parse(localStorage.getItem('todos'));
    }
    localStorage.setItem('todos', JSON.stringify([...localTodos.filter((t) => t.id !== id)]));
  };

  const removeTodo = () => {
    setTodos(todos.filter((t) => t.id !== id));
    removeLocalTodos(id);
  };

  return (
    <div className="todo-item-container">
      <li className="todo-item">
        <div className="todo-column1">
          <p className="todo-text">
            {text}
          </p>
        </div>
        <button type="button" onClick={() => removeTodo()} className="trash-button">
          <BsTrash />
        </button>
      </li>
    </div>
  );
}

export default Todo;
