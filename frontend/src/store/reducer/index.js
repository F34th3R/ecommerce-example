import { combineReducers } from 'redux'
import { userReducer as user } from './user_reducer'

const rootReducer = combineReducers({
  user
})

export default rootReducer
