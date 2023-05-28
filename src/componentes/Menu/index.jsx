import React from 'react'
import styles from '../Menu/css/Menu.module.scss'
import Icone from '../Icone'
import Icones from '../Icone/json/icones.json'


export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {Icones.map(Icones => <Icone key={Icones.id} icones={Icones} styles={styles} />)}
      </ul>
    </nav>
  )
}