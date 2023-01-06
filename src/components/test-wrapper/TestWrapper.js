import styles from './TestWrapper.module.css'
import React from 'react';

import Board from '../board/Board';
import ResultCard from '../result-card/ResultCard';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import MainInput from "../input/MainInput";

function TestWrapper() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <div className={styles.test_wrapper}>
                      <Board />
                      <MainInput />
                    </div>
                  }
                />
                <Route path="/result" element={<div className={styles.test_wrapper}><ResultCard /></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default TestWrapper;
