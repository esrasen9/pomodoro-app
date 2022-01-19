import './App.css';
import React, { useEffect } from 'react';
import Mascot from './img/istockphoto-1268682464-170667a.jpg';
import Timer from './components/timer/Timer';
import TodoList from './components/todo-list/TodoList';
import TimerSettings from './components/timer/TimerSettings';
import { useStateValue } from './components/Context';

function App() {
  const { setTodos, showSettings } = useStateValue();
  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos([...JSON.parse(localStorage.getItem('todos'))]);
    }
  }, []);
  return (
    <div data-testid="app" className="app">
      <div data-testid="header" className="header">
        <div data-testid="mascot" className="mascot">
          <img src={Mascot} alt="" />
        </div>
        {
                    showSettings ? <TimerSettings /> : <Timer />
                }
      </div>
      <TodoList />
    </div>
  );
}

export default App;
