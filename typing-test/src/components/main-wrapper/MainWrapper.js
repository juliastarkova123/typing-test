import styles from './MainWrapper.module.css'
import Header from '../header/Header';
import TestWrapper from "../test-wrapper/TestWrapper";

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <TestWrapper />
        </div>
    )
}

export default MainWrapper;
