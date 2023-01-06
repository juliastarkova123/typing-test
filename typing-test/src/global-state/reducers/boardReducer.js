import { eng } from "../../dictionary/eng"
import { ru } from '../../dictionary/ru'

Array.prototype.getRandElem = function() {
  return this[Math.floor(Math.random() * this.length)]
}

const ADD_ELEMENT = 'ADD_ELEMENT'
const REMOVE_LAST_ELEMENT = 'REMOVE_LAST_ELEMENT'

const initialState = {
  currentLang: "eng",
  firstLine: [],
  isComplete: [false, false],   // is particular line has enough words inside
  secondLine: [],
  currentWord: 0
}

const reducer = (state = initialState, action) => {
  let newState = { ...state }

  switch (action.type) {
    case ADD_ELEMENT:
      const newWord  = newState.currentLang === 'eng' ? eng.getRandElem() : ru.getRandElem()[0]
      action.lineNumber ===  0 ? newState.firstLine.push(newWord) : newState.secondLine.push(newWord)
      return newState

    case REMOVE_LAST_ELEMENT:
      action.lineNumber === 0 ? newState.firstLine.pop() : newState.secondLine.pop()
      newState.isComplete[action.lineNumber] = true
      return newState

    default:
      return newState
  }
}

export default reducer



export const addElementToLine = (lineNumber) => {
  return dispatch => {
    dispatch({
      type: ADD_ELEMENT,
      lineNumber: lineNumber
    })
  }
}

export const removeLastElement = (lineNumber) => {
  return dispatch => {
    dispatch({
      type: REMOVE_LAST_ELEMENT,
      lineNumber: lineNumber
    })
  }
}
