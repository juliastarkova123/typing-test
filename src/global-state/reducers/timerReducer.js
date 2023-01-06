const COUNT_DOWN = "COUNT_DOWN"
const TOGGLE_TIMER = "TOGGLE_TIMER"
const RESET_TIMER = "RESET_TIMER"

const TIME = 60

const initialState = {
  time: TIME,
  isActive: false,
  isTimeOut: false
}

const reducer = (state = initialState, action) => {
  let newState = { ...state }

  switch (action.type) {
    case COUNT_DOWN:
      if (newState.isActive && newState.time > 0) {
        newState.time = newState.time - 1
      }
      else if (newState.isActive && newState.time === 0) {
        newState.isActive = false
        newState.isTimeOut = true
      }
      return newState

    case TOGGLE_TIMER:
      newState.isActive ? newState.isActive = false : newState.isActive = true
      return newState

    case RESET_TIMER:
      newState.time = TIME
      newState.isTimeOut = false
      newState.isActive = false
      return newState

    default:
      return state
  }
}

export default reducer




export const countDownTimer = () => {
  return dispatch => {
    dispatch({
      type: COUNT_DOWN
    })
  }
}

export const toggleTimer = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TIMER
    })
  }
}

export const resetTimer = () => {
  return dispatch => {
    dispatch({
      type: RESET_TIMER
    })
  }
}