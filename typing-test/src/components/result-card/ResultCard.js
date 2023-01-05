import styles from './ResultCard.module.css'
import { NavLink } from "react-router-dom";

import React from 'react';

function ResultCard() {

    return (
        <div className={styles.result_card}>
            <span className={styles.result_title}>
                <span className={styles.result_digit}>{}</span> words
            </span>
            <span className={styles.message}>not bad, but could be better🐢</span>
            
            <NavLink to="/" className={styles.link_restart}>
                <button className={styles.btn_restart}>ok, try again</button>
            </NavLink>
            
        </div>
    )
}

export default ResultCard;
