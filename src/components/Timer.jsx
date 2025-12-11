import { useEffect, useState } from "react";
import "../styles/global.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime()}</div>

      <div className="timer-buttons">
        <button className="btn start-btn" onClick={handleStart}>Start</button>
        <button className="btn stop-btn" onClick={handleStop}>Stop</button>
        <button className="btn reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;