import { configureStore } from '@reduxjs/toolkit';
import { pomodoroReducer } from './PomodoroSlice';
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";

const store = configureStore({
    reducer: {
        pomodoro: pomodoroReducer,
        user: userReducer
        // blog: blogReducer,
    },
});

export default store;