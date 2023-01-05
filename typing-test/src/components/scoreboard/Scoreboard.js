import styles from './Scoreboard.module.css'

const filters = ["all", "english", "russian"]

function Scoreboard() {
    return (
        <div className={styles.scoreboard}>
            <div>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>language</td>
                            <td>WPM (words per minute)</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>english</td>
                            <td>34</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <select className={styles.select_table_filter} role="button">
                <option value={filters[0]}>all languages</option>
                <option value={filters[1]}>english</option>
                <option value={filters[2]}>russian</option>
            </select>
        </div>
    )
}

export default Scoreboard