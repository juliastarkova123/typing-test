import styles from './MainInput.module.css'

import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import Timer from "../timer/Timer";
import { resetResult, resetListOfCorrectWords, addToResult, updateState, resetState } from '../../global-state/reducers/resultReducer';

function MainInput() {

    const [curValue, setCurValue] = useState("")

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setCurValue(event.target.value)

        if (event.target.value.length > 0 && event.target.value.slice(-1) === " ") {
            setCurValue("")
            dispatch(resetState())
        }
    }

    const onClickRestart = () => {
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
