import { combineReducers } from 'redux'
import greetingsReducer from './greetingsReducer'
import employeesReducer from './employeesReducer'

const rootReducer = combineReducers({
  greetings: greetingsReducer,
  employees: employeesReducer
})


export default rootReducer