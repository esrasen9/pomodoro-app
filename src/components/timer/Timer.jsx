import React, { useEffect, useRef, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';
import { AiOutlinePauseCircle, AiOutlinePlayCircle, AiOutlineSetting } from 'react-icons/ai';
import { useStateValue } from '../Context';

function Timer() {
  const states = useStateValue();
  const { workMinutes, breakMinutes, setShowSettings } = states;
  const [timerSeconds, setTimerSeconds] = useState(workMinutes * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [activeMode, setActiveMode] = useState('work');

  const formatTime = () => {
    const min = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const scs = (timerSeconds % 60).toString().padStart(2, '0');
    return `${min}:${scs}`;
  };

  const timerSecondsRef = useRef(timerSeconds);
  const activeModeRef = useRef(activeMode);
  const workMinutesRef = useRef(workMinutes);
  const breakMinutesRef = useRef(breakMinutes);
  const intervalIdRef = useRef(intervalId);

  useEffect(() => {
    let interval;
    if (timerOn) {
      interval = setInterval(() => {
        if (timerSecondsRef.current === 0) {
          if (activeMode === 'work') {
            activeModeRef.current = 'break';
            setActiveMode(activeModeRef.current);
            timerSecondsRef.current = breakMinutesRef.current * 60;
            setTimerSeconds(timerSecondsRef.current);
          } else {
            activeModeRef.current = 'work';
            setActiveMode(activeModeRef.current);
            timerSecondsRef.current = workMinutesRef.current * 60;
            setTimerSeconds(timerSecondsRef.current);
          }
        }
        timerSecondsRef.current -= 1;
        setTimerSeconds(timerSecondsRef.current);
        intervalIdRef.current = intervalId;
        setIntervalId(intervalIdRef.current);
      }, 1000);
    }
    if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, setTimerSeconds, activeMode]);

  return (
    <div
      data-testid="timer-container"
      className={`${activeMode === 'break' ? 'break-container' : 'work-container'} timer-container`}
    >
      <div
        data-testid="time-counter"
        className="time-counter"
      >
        {
                    formatTime()
                }
      </div>
      <div
        data-testid="timer-buttons-container"
        className="timer-buttons-container"
      >
        <button
          type="button"
          data-testid="timer-control-btn"
          className="timer-control-btn"
          onClick={() => setTimerOn(!timerOn)}
        >
          {timerOn ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
        </button>
        <button
          type="button"
          data-testid="timer-settings-btn"
          onClick={() => setShowSettings(true)}
          className="timer-settings-btn"
        >
          <AiOutlineSetting />
        </button>
      </div>
    </div>
  );
}

export default Timer;
