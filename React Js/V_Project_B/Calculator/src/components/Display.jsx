import React from 'react'
import styles from './Display.module.css'

function Display({displayValue}) {
    return <input type="text" className={styles.display} value={displayValue} readOnly placeholder='0'/>
}

export default Display; 