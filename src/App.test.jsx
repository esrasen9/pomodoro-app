import { render, screen } from '@testing-library/react';
import App from './App';
import Provider from './components/Context';

test('App components are rendered correctly.', () => {
  render(
    <Provider>
      <App />
    </Provider>,
  );
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();

  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();

  const mascot = screen.getByTestId('mascot');
  expect(mascot).toBeInTheDocument();

  const todoListContainer = screen.getByTestId('todo-list-container');
  expect(todoListContainer).toBeInTheDocument();
});
