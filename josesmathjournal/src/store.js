// Sets up the Redux store to use the reducer
import { createStore } from 'redux'
import { pomodoroReducer } from './PomodoroSlice'

const store = createStore(pomodoroReducer)

export default store