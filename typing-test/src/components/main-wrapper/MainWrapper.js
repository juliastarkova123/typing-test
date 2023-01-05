import styles from './MainWrapper.module.css'
import Header from '../header/Header';
import Scoreboard from "../scoreboard/Scoreboard";
import LanguageToggler from "../test-language-toggler/LanguageToggler";

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <Scoreboard />
            <LanguageToggler />
        </div>
    )
}

export default MainWrapper;
