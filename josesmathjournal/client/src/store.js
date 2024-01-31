import { configureStore } from '@reduxjs/toolkit';
import { pomodoroReducer } from './PomodoroSlice';
import userReducer from "./userSlice";


const store = configureStore({
    reducer: {
        pomodoro: pomodoroReducer,
        user: userReducer
    },
});

export default store;