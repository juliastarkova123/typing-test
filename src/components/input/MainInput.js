import styles from './MainInput.module.css'

import React, { useState } from 'react';
import { turnNextWord } from '../../global-state/reducers/boardReducer';
import { useDispatch, useSelector } from 'react-redux';

import Timer from '../timer/Timer';
import { toggleTimer, resetTimer } from '../../global-state/reducers/timerReducer';
import { resetBoard } from '../../global-state/reducers/boardReducer';
import { resetResult, resetListOfCorrectWords, addToResult, updateState, resetState } from '../../global-state/reducers/resultReducer';

function MainInput() {

  const [curValue, setCurValue] = useState("")

  const dispatch = useDispatch()
  const timerState = useSelector(state => state.timer)
  const boardState = useSelector(state => state.board)

  const handleChange = (event) => {
    if (!timerState.isActive) {
      dispatch(toggleTimer())
    }

    setCurValue(event.target.value)

    dispatch(updateState(event.target.value, boardState.firstLine[boardState.currentWord]))

    if (event.target.value.length > 0 && event.target.value.slice(-1) === " ") {
      setCurValue("")
      dispatch(turnNextWord())
      dispatch(resetState())
      if (event.target.value.slice(0, -1) === boardState.firstLine[boardState.currentWord]) {
        dispatch(addToResult(boardState.currentWord))
      }
      if (boardState.firstLine.length === boardState.currentWord + 1) {
        dispatch(resetListOfCorrectWords())
      }
    }
  }

  const onClickRestart = () => {
    dispatch(toggleTimer())
    dispatch(resetTimer())
    dispatch(resetBoard())
    dispatch(resetState())
    dispatch(resetResult())
    dispatch(resetListOfCorrectWords())
    setCurValue("")
  }

  return (
      <div className={styles.main_input_wrapper}>
        <input type={"text"} className={styles.main_input} value={curValue} onChange={handleChange} />
        <span className={styles.time_span}><Timer /></span>
        <button className={styles.btn_redo} onClick={onClickRestart}><i className="fas fa-redo fa-1x"></i></button>
      </div>
  )
}

export default MainInput;
