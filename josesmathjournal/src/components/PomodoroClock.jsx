import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer, updateTimer } from '../PomodoroSlice';

const PomodoroClock = () => {
    // Accessing Redux dispatch function
    const dispatch = useDispatch();

    // Accessing timeLeft and isRunning states from Redux store
    const timeLeft = useSelector(state => state.timeLeft);
    const isRunning = useSelector(state => state.isRunning);

    useEffect(() => {
        let interval;

        // Setting up an interval when the timer is running
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                // Dispatching action to update the timer every second
                dispatch(updateTimer(timeLeft - 1));
            }, 1000);
        } else if (!isRunning) {
            // Clearing the interval when the timer is not running
            clearInterval(interval);
        }

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [isRunning, timeLeft, dispatch]);

    return (
        <div className="pomodoro-clock">
            <div className="pomodoro-timer">Time Left: {formatTime(timeLeft)}</div>
            <div className="pomodoro-controls">
                {/* Buttons to control the Pomodoro timer */}
                <button onClick={() => dispatch(startTimer())}>Start</button>
                <button onClick={() => dispatch(stopTimer())}>Stop</button>
                <button onClick={() => dispatch(resetTimer())}>Reset</button>
            </div>
        </div>
    );
};

// This function helps format the time into minutes and seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export default PomodoroClock;