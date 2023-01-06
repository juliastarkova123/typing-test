import { combineReducers } from 'redux'

import timerReducer  from './timerReducer'
import boardReducer from './boardReducer'
import resultReducer from './resultReducer'

const reducers = combineReducers({
  timer: timerReducer,
  board: boardReducer,
  result: resultReducer
})

export default reducers
