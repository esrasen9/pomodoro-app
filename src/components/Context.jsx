import React, { useContext, useMemo, useState } from 'react';

export const Context = React.createContext(null);

function Provider(props) {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [todos, setTodos] = useState([]);
  const { children } = props;

  const store = useMemo(() => ({
    showSettings,
    setShowSettings,
    workMinutes,
    setWorkMinutes,
    breakMinutes,
    setBreakMinutes,
    todos,
    setTodos,
  }), [showSettings, workMinutes, breakMinutes, todos]);

  return (
    <Context.Provider value={store}>
      {children }
    </Context.Provider>
  );
}

export default Provider;
export const useStateValue = () => useContext(Context);
