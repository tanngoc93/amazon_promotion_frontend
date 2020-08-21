import { combineReducers } from 'redux'
import { couponReducer } from './couponReducer'
import { commentReducer } from './commentReducer'

// We combine the reducers here so that they
// can be left split apart above
const rootReducer = combineReducers({
  couponReducer,
  commentReducer
})

export default rootReducer
