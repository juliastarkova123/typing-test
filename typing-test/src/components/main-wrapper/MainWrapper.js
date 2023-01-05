import styles from './MainWrapper.module.css'
import Header from '../header/Header';
import Board from "../board/Board";
import MainInput from "../input/MainInput";

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <Board />

            <MainInput />
        </div>
    )
}

export default MainWrapper;
