import styles from './LanguageToggler.module.css'
import ruFlag from '../../icons/flags/ru.png'
import ukFlag from '../../icons/flags/uk.png'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { changeLanguage } from '../../global-state/reducers/boardReducer';
import { resetBoard } from '../../global-state/reducers/boardReducer';
import { resetTimer } from '../../global-state/reducers/timerReducer';
import { resetState } from '../../global-state/reducers/resultReducer';
import { resetResult } from '../../global-state/reducers/resultReducer';
import { resetListOfCorrectWords } from '../../global-state/reducers/resultReducer';

function LanguageToggler() {

    const currentLang = useSelector(state => state.board.currentLang)
    const dispatch = useDispatch()

    const onClickChangeLang = (lang) => {
        dispatch(changeLanguage(lang))
        dispatch(resetTimer())
        dispatch(resetBoard())
        dispatch(resetState())
        dispatch(resetResult())
        dispatch(resetListOfCorrectWords())
    }

    return (
        <div className={styles.language_toggler}>
            <div className={styles.container}>
                <img
                    src={ukFlag}
                    className={`${styles.lang_icon} ${currentLang === "eng" ? styles.active_lang_icon : styles.disabled_lang_icon}`}
                    onClick={() => onClickChangeLang("eng")}
                />
                <img
                    src={ruFlag}
                    className={`${styles.lang_icon} ${currentLang === "ru" ? styles.active_lang_icon : styles.disabled_lang_icon}`}
                    onClick={() => onClickChangeLang("ru")}
                />
            </div>
        </div>
    )
}

export default LanguageToggler;
