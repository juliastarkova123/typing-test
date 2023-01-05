import styles from './MainWrapper.module.css'
import Header from '../header/Header';
import LanguageToggler from "../test-language-toggler/LanguageToggler";

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <LanguageToggler />
        </div>
    )
}

export default MainWrapper;
