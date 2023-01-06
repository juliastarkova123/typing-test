import { eng } from "../../dictionary/eng"
import { ru } from '../../dictionary/ru'

Array.prototype.getRandElem = function() {
  return this[Math.floor(Math.random() * this.length)]
}

const ADD_ELEMENT = 'ADD_ELEMENT'
const REMOVE_LAST_ELEMENT = 'REMOVE_LAST_ELEMENT'
const TURN_NEXT_WORD = 'TURN_NEXT_WORD'
const RESET = 'RESET'
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

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

    case TURN_NEXT_WORD:
      if (newState.firstLine.length - newState.currentWord >= 2) {
        newState.currentWord++
      }
      else {
        newState.firstLine = [...newState.secondLine]
        newState.secondLine = []
        newState.currentWord = 0
        newState.isComplete[1] = false  // that's why Board.js will generate new second line
      }
      return newState

    case RESET:
      newState.firstLine = []
      newState.secondLine = []
      newState.isComplete = [false, false]
      newState.currentWord = 0
      return newState

    case CHANGE_LANGUAGE:
      newState.currentLang = action.currentLang
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

export const turnNextWord = () => {
  return dispatch => {
    dispatch({
      type: TURN_NEXT_WORD
    })
  }
}

export const resetBoard = () => {
  return dispatch => {
    dispatch({
      type: RESET
    })
  }
}

export const changeLanguage = (lang) => {
  return dispatch => {
    dispatch({
      type: CHANGE_LANGUAGE,
      currentLang: lang
    })
  }
}