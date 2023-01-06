import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { countDownTimer } from '../../global-state/reducers/timerReducer';
import { toggleTimer } from '../../global-state/reducers/timerReducer';
import { resetBoard } from '../../global-state/reducers/boardReducer';
import { resetTimer } from '../../global-state/reducers/timerReducer';
import { resetState } from '../../global-state/reducers/resultReducer';
import { addNewResult } from '../../global-state/reducers/resultReducer';

function Timer() {

    const timerState = useSelector(state => state.timer)
    const resultState = useSelector(state => state.result)
    const boardState = useSelector(state => state.board)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        window.interval = setInterval(() => {
            dispatch(countDownTimer())
        }, 1000)

        return () => {
            clearInterval(window.interval)
        }
    }, [])

    useEffect(() => {
        if (timerState.isTimeOut) {
            dispatch(toggleTimer())
            dispatch(resetTimer())
            dispatch(resetBoard())
            dispatch(resetState())
            dispatch(addNewResult(boardState.currentLang, resultState.currentResult))

            clearInterval(window.interval)

            navigate("/result")
        }
    }, [timerState.isTimeOut])

    return <span>{timerState.time === 60 ? "1:00" : `0:${timerState.time < 10 ? "0" + timerState.time : timerState.time}`}</span>
}

export default Timer;
