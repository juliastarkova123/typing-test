import styles from './MainInput.module.css'

import React, { useState } from 'react';

import Timer from "../timer/Timer";

function MainInput() {

    const [curValue, setCurValue] = useState("")

    const handleChange = (event) => {
        setCurValue(event.target.value)
    }

    const onClickRestart = () => {
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
