import styles from './MainWrapper.module.css'
import Header from '../header/Header';

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
        </div>
    )
}

export default MainWrapper;
