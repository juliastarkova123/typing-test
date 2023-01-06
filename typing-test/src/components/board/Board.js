import styles from './Board.module.css'

import React, {useEffect, useRef} from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { addElementToLine, removeLastElement } from '../../global-state/reducers/boardReducer';

function Board() {

    const firstLine = useRef(null)
    const secondLine = useRef(null)

    const boardStore = useSelector(state => state.board)

    const dispatch = useDispatch()

    useEffect(() => {
        fillLine(0)
        fillLine(1)
    }, [])

    const fillLine = (lineNumber) => {
        const line = lineNumber === 0 ? firstLine : secondLine
        const width = line.current.clientWidth - 18 * 2    // subtract left and right paddings
        let widthOfSpans = 0
        for (let i = 0; i < line.current.children.length; i++) {
            widthOfSpans += line.current.children[i].clientWidth
        }
        if (widthOfSpans < width && !boardStore.isComplete[lineNumber]) dispatch(addElementToLine(lineNumber))
        else if (widthOfSpans >= width) dispatch(removeLastElement(lineNumber))
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
