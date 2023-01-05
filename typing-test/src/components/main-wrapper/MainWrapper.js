import styles from './MainWrapper.module.css'
import Header from '../header/Header';
import Board from "../board/Board";

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <Board />
        </div>
    )
}

export default MainWrapper;
