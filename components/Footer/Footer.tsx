import React from 'react'
import styles from "./styles.module.css"

const Footer = () => {
  return <div className={styles.wrapper}>

<div className={styles.navigation}>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
}

export default Footer