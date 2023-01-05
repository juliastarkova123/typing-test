import styles from './Board.module.css'

import React, {useEffect, useRef} from 'react';

function Board() {

    const firstLine = useRef(null)
    const secondLine = useRef(null)

    useEffect(() => {
        fillLine(0)
        fillLine(1)
    })

    const fillLine = (lineNumber) => {
        const line = lineNumber === 0 ? firstLine : secondLine
        const width = line.current.clientWidth - 18 * 2    // subtract left and right paddings
        let widthOfSpans = 0
        for (let i = 0; i < line.current.children.length; i++) {
            widthOfSpans += line.current.children[i].clientWidth
        }
        if (widthOfSpans < width) {
            // add word
        }
        else if (widthOfSpans >= width) {
            // remove last word
        }
    }

    return (
        <div className={styles.board}>
            <div className={styles.board_line} ref={firstLine}>
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
            <div className={styles.board_line} ref={secondLine}>
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
