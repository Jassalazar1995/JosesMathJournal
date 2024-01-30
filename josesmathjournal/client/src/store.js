// Sets up the Redux store to use the reducer
import { combineReducers, createStore } from 'redux'
import { pomodoroReducer } from './PomodoroSlice'
import userReducer from "./userSlice"
import { configureStore } from '@reduxjs/toolkit'


// const rootReducer = combineReducers({
//     pomodoro: pomodoroReducer,
//     user: userReducer
// })

// const store = createStore(rootReducer)

// Went with configureStore since Redux has createstore as deprecated.
// Alternatively:
const store = configureStore({
    reducer: {
        pomodoro: pomodoroReducer,
        user: userReducer
    }
})
export default store