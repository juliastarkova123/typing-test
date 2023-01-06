import styles from './Scoreboard.module.css'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const filters = ["all", "english", "russian"]

function Scoreboard() {

    const [filter, setFilter] = useState(filters[0])

    const resultsStorage = useSelector(state => state.result.resultsStorage)

    const selectOnChange = (event) => {
        setFilter(event.target.value)
    }

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
                  {
                      resultsStorage.filter(item => {return filter === filters[0] || item.lang === filter ? item : null})
                        .sort((a, b) => {return b.wpm - a.wpm})
                        .map((result, idx) => {
                            return (
                              <tr key={idx}>
                                  <td>{idx + 1}</td>
                                  <td>{result.lang}</td>
                                  <td>{result.wpm}</td>
                              </tr>
                            )
                        })
                  }
                  </tbody>
              </table>
              {
                  resultsStorage.length === 0 ?
                    <p style={{textAlign: "center", fontWeight: "bold", fontSize: "26px", marginTop: "20px"}}>NO RESULTS YET</p> :
                    null
              }
          </div>
          <select className={styles.select_table_filter} value={filter} onChange={selectOnChange} role="button">
              <option value={filters[0]}>all languages</option>
              <option value={filters[1]}>english</option>
              <option value={filters[2]}>russian</option>
          </select>
      </div>
    )
}

export default Scoreboard
