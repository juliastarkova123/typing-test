import styles from './LanguageToggler.module.css'
import ruFlag from '../../icons/flags/ru.png'
import ukFlag from '../../icons/flags/uk.png'

import React from 'react';

function LanguageToggler() {
    return (
        <div className={styles.language_toggler}>
            <div className={styles.container}>
                <img 
                    src={ukFlag} 
                    className={`${styles.lang_icon} ${"eng" === "eng" ? styles.active_lang_icon : styles.disabled_lang_icon}`}
                />
                <img 
                    src={ruFlag} 
                    className={`${styles.lang_icon} ${"eng" === "ru" ? styles.active_lang_icon : styles.disabled_lang_icon}`}
                />
            </div>
        </div>
    )
}

export default LanguageToggler;
