const ADD_TO_RESULT = 'ADD_TO_RESULT'
const RESET_RESULT = 'RESET_RESULT'
const UPDATE_STATE = 'UPDATE_STATE'
const RESET_STATE = 'RESET_STATE'
const RESET_CORRECT_WORDS = 'RESET_CORRECT_WORDS'
const ADD_NEW_RESULT  = 'ADD_NEW_RESULT'

const initialState = {
  // result:
  currentResult: 0,
  correctWords: [],
  // state:
  lettersTyped: 0,
  isTypingRight: true,

  resultsStorage: []
}

const reducer = (state = initialState, action) => {
  let newState = { ...state }

  switch (action.type) {
    case ADD_TO_RESULT:
      newState.currentResult++
      newState.correctWords.push(action.wordNumber)
      return newState

    case RESET_RESULT:
      newState.currentResult = 0
      newState.correctWords = []
      return newState

    // will be used during switching to another line
    case RESET_CORRECT_WORDS:
      newState.correctWords = []
      return newState

    case UPDATE_STATE:
      if (action.currentTypedWord === action.currentTargetWord.slice(0, action.currentTypedWord.length)) {
        newState.isTypingRight = true
        newState.lettersTyped = action.currentTypedWord.length
      } else {
        newState.isTypingRight = false
        newState.lettersTyped = action.currentTypedWord.length
      }
      return newState

    case RESET_STATE:
      newState.lettersTyped = 0
      newState.isTypingRight = true
      return newState

    case ADD_NEW_RESULT:
      newState.resultsStorage = [...newState.resultsStorage, {lang: action.lang === "eng" ? "english" : "russian", wpm: action.wpm}]
      return newState

    default:
      return newState
  }
}

export default reducer




export const addToResult = (wordNumber) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_RESULT,
      wordNumber: wordNumber
    })
  }
}

export const resetResult = () => {
  return dispatch => {
    dispatch({
      type: RESET_RESULT
    })
  }
}

export const updateState = (currentTypedWord, currentTargetWord) => {
  return dispatch => {
    dispatch({
      type: UPDATE_STATE,
      currentTypedWord: currentTypedWord,
      currentTargetWord: currentTargetWord
    })
  }
}

export const resetState = () => {
  return dispatch => {
    dispatch({
      type: RESET_STATE
    })
  }
}

export const resetListOfCorrectWords = () => {
  return dispatch => {
    dispatch({
      type: RESET_CORRECT_WORDS
    })
  }
}

export const addNewResult = (lang, wpm) => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_RESULT,
      lang: lang,
      wpm: wpm
    })
  }
}
