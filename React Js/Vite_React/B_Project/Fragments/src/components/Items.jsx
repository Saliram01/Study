import React from 'react'
import styles from './Item.module.css'

function Items({list, bought, handleBuy}) {
  
  return <li className={`${styles.bgList} list-group-item  ${bought ? 'active' : ''}`}>
    <span className={styles.list}>{list}</span>
    <button className={`${styles.button} btn btn-info`} onClick={handleBuy}>Buy</button>
    </li>;
}

export default Items  