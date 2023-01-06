import { combineReducers } from 'redux'

import resultReducer from "./resultReducer";
import timerReducer from "./timerReducer";

const reducers = combineReducers({
  timer: timerReducer,
  result: resultReducer
})

export default reducers
