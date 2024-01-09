// Created the actions the timer will have: Start, Stop, Reset, Update

export const startTimer = () => {
    return {
        type: 'START_TIMER'
    };
};

export const stopTimer = () => {
    return {
        type: 'STOP_TIMER'
    };
};

export const resetTimer = () => {
    return {
        type: 'RESET_TIMER'
    };
};

export const updateTimer = (timeLeft) => {
    return {
        type: 'UPDATE_TIMER',
        payload: timeLeft
    };
};

// Creating a reducer that handles these timer actions and maintains the state of the timer
const initialState = {
    isRunning: false,
    timeLeft: 25 * 60 // 25 minutes in seconds
};

export const pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return { ...state, isRunning: true };
        case 'STOP_TIMER':
            return { ...state, isRunning: false };
        case 'RESET_TIMER':
            return { ...state, timeLeft: 25 * 60, isRunning: false };
        case 'UPDATE_TIMER':
            return { ...state, timeLeft: action.payload };
        default:
            return state;
    }
};