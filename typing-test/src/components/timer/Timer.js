import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { countDownTimer } from '../../global-state/reducers/timerReducer';
import { toggleTimer } from '../../global-state/reducers/timerReducer';
import { resetTimer } from '../../global-state/reducers/timerReducer';

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
    }, [])

    useEffect(() => {
        if (timerState.isTimeOut) {
            dispatch(toggleTimer())
            dispatch(resetTimer())
            clearInterval(window.interval)
            navigate("/result")
        }
    }, [timerState.isTimeOut])

    return <span>{timerState.time === 60 ? "1:00" : `0:${timerState.time < 10 ? "0" + timerState.time : timerState.time}`}</span>
}

export default Timer;
