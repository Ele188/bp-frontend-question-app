import React from 'react'
import styles from "./styles.module.css"

const Header = () => {
  return <div className={styles.wrapper}>
    <div className={styles.logo}> 
     <img src="https://static.thenounproject.com/png/1471299-200.png" />
    </div>
    <div className={styles.title}>  PollPulse </div>
    
  </div>
}

export default Header