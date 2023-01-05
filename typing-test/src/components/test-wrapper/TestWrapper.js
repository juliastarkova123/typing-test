import styles from './TestWrapper.module.css'
import React from 'react';

import Board from '../board/Board';
import ResultCard from '../result-card/ResultCard';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

function TestWrapper() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <div className={styles.test_wrapper}>
                      <Board />
                    </div>
                  }
                />
                <Route path="/result" element={<div className={styles.test_wrapper}><ResultCard /></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default TestWrapper;
