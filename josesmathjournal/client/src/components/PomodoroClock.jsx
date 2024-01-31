import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer, updateTimer } from '../PomodoroSlice';

const PomodoroClock = () => {
    // Accessing Redux dispatch function
    const dispatch = useDispatch();

    // Accessing timeLeft and isRunning states from Redux store
    const timeLeft = useSelector(state => state.pomodoro.timeLeft);
    const isRunning = useSelector(state => state.pomodoro.isRunning);

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
        // Using Tailwind CSS for styling
        <div className="flex flex-col items-center p-4 bg-gray-700 text-white rounded-lg">
            <div className="text-lg font-semibold mb-2">Time Left: {formatTime(timeLeft)}</div>
            <div className="flex gap-2">
                <button 
                    onClick={() => dispatch(startTimer())} 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Start
                </button>
                <button 
                    onClick={() => dispatch(stopTimer())} 
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                    Stop
                </button>
                <button 
                    onClick={() => dispatch(resetTimer())} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Reset
                </button>
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


