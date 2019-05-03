import { combineReducers } from 'redux'
import volunteerReducers from './volunteerReducers'
import businessReducers from './businessReducers'

export default combineReducers({
  volunteerReducers,
  businessReducers
})