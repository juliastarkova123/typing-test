import React from 'react';
import styles from "./Header.module.css"

function Header() {
    return (
        <header className="pt-2">
            <h1 className={`${styles.header} ${styles.main_header} mb-3`}>Typing Test</h1>
            <h6 className={`${styles.header} ${styles.secondary_header}`}>Fast touch typing can save you more than 10 hours every week</h6>
        </header>
    )
}

export default Header;
