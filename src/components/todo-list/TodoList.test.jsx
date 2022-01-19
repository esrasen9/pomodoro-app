import { render, screen } from '@testing-library/react';
import React from 'react';
import Provider from '../Context';
import TodoList from './TodoList';

test('Todo list components are rendered correctly.', async () => {
  render(
    <Provider value={Provider.store}>
      <TodoList />
    </Provider>,
  );

  const todoListContainer = screen.getByTestId('todo-list-container');
  expect(todoListContainer).toBeInTheDocument();

  const todoListForm = screen.getByTestId('todo-list-form');
  expect(todoListForm).toBeInTheDocument();

  const todoList = screen.getByTestId('todo-list');
  expect(todoList).toBeInTheDocument();

  const addTodoInput = screen.getByTestId('add-todo-input');
  expect(addTodoInput).toBeInTheDocument();
  expect(addTodoInput).toHaveTextContent('');

  const plusButton = screen.getByTestId('plus-button');
  expect(plusButton).toBeInTheDocument();
});
