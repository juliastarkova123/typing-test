import styles from './Board.module.css'

import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { addElementToLine, removeLastElement } from '../../global-state/reducers/boardReducer';

function Board() {

    const firstLine = useRef(null)
    const secondLine = useRef(null)

    const boardStore = useSelector(state => state.board)
    const resultStore = useSelector(state => state.result)

    const dispatch = useDispatch()

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
        if (widthOfSpans < width && !boardStore.isComplete[lineNumber]) dispatch(addElementToLine(lineNumber))
        else if (widthOfSpans >= width) dispatch(removeLastElement(lineNumber))
    }

    return (
        <div className={styles.board}>
            <div className={styles.board_line} ref={firstLine}>
                {
                    boardStore.firstLine.map((word, index) => {
                        return (
                            <span
                                className={
                                    `${styles.board_word} ${index === boardStore.currentWord ? styles.board_word__active : ""} 
                                    ${resultStore.correctWords.includes(index) ? styles.letter__success : index < boardStore.currentWord ? styles.letter__danger : ""}`
                                }
                                key={index}
                            >
                            {[...word].map((letter, indexLetter) => {
                                return (
                                    <span
                                        key={indexLetter}
                                        className={
                                            !resultStore.isTypingRight && index === boardStore.currentWord && resultStore.lettersTyped ?
                                            styles.letter__danger : resultStore.lettersTyped > indexLetter && index === boardStore.currentWord && resultStore.lettersTyped ?
                                            styles.letter__success : ""
                                        }
                                    >
                                        {letter}
                                    </span>
                                )
                            })}
                        </span>
                        )
                    })
                }
            </div>
            <div className={styles.board_line} ref={secondLine}>
                {
                    boardStore.secondLine.map((word, index) => {
                        return <span className={styles.board_word} key={index}>{word}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Board;
