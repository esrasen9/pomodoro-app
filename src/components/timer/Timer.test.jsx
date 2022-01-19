import { render, screen } from '@testing-library/react';
import React from 'react';
import Provider from '../Context';
import Timer from './Timer';

test('Pomodoro timer components are rendered correctly.', async () => {
  render(
    <Provider value={Provider.store}>
      <Timer />
    </Provider>,
  );

  const timerContainer = screen.getByTestId('timer-container');
  expect(timerContainer).toBeInTheDocument();

  const timeCounter = screen.getByTestId('time-counter');
  expect(timeCounter).toBeInTheDocument();

  const timerButtonsContainer = screen.getByTestId('timer-buttons-container');
  expect(timerButtonsContainer).toBeInTheDocument();

  const timerControlBtn = screen.getByTestId('timer-control-btn');
  expect(timerControlBtn).toBeInTheDocument();

  const timerSettingsBtn = screen.getByTestId('timer-settings-btn');
  expect(timerSettingsBtn).toBeInTheDocument();
});
