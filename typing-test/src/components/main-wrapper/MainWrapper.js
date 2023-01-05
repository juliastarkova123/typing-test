import styles from './MainWrapper.module.css'
import Header from '../header/Header';
import Scoreboard from "../scoreboard/Scoreboard";

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <Scoreboard />
        </div>
    )
}

export default MainWrapper;
