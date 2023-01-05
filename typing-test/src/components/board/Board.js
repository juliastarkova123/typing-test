import styles from './Board.module.css'

import React from 'react';

function Board() {

    return (
        <div className={styles.board}>
            <div className={styles.board_line}>
                <span className={styles.board_word}>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                </span>
                <span className={styles.board_word}>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                </span>
                <span className={styles.board_word}>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                </span>
            </div>
            <div className={styles.board_line}>
                <span className={styles.board_word}>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                </span>
                <span className={styles.board_word}>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                </span><span className={styles.board_word}>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                </span>

            </div>
        </div>
    )
}

export default Board;
