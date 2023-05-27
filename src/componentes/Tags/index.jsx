import React from 'react'
import styles from '../Tags/css/Tags.module.scss'

export default function Tags() {
  return (
    <div className={styles.tags}>
        <p>Filtre por TAGS: </p>
        <ul className={styles.tags__lista}>
            <li>Estrelas</li>
            <li>Galáxias</li>
            <li>Lua</li>
            <li>Planetas</li>
        </ul>
    </div>
  )
}
