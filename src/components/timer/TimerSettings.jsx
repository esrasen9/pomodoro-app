import React from 'react';
import './Timer.css';
import ReactSlider from 'react-slider';
import { useStateValue } from '../Context';

function TimerSettings() {
  const {
    setShowSettings, workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes,
  } = useStateValue();
  return (
    <div className="settings-container">
      <label htmlFor="work">
        Work |
        {`${workMinutes}:00`}
      </label>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        onChange={(newVal) => setWorkMinutes(newVal)}
        id="work"
        value={workMinutes}
        min={1}
        max={120}
      />
      <label htmlFor="break">
        Break Minutes |
        {`${breakMinutes}:00`}
      </label>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        onChange={(newVal) => setBreakMinutes(newVal)}
        id="break"
        value={breakMinutes}
        min={1}
        max={120}
      />
      <button type="button" className="start-work-btn" onClick={() => setShowSettings(false)}>
        Start Work!
      </button>
    </div>
  );
}

export default TimerSettings;
