import React from 'react';
import './TodoList.css';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { useStateValue } from '../Context';

function TodoList() {
  const { todos } = useStateValue();
  return (
    <div data-testid="todo-list-container" className="todo-list-container">
      <TodoForm />
      <ul
        data-testid="todo-list"
        className="todo-list"
      >
        {todos.map((todo) => <Todo data-testid="todo" key={todo} todo={todo} />)}
      </ul>
    </div>
  );
}

export default TodoList;
