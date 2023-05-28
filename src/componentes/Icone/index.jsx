import React from 'react';

export default function Icone({ icones, styles }) {
  return (
    <li className={styles.menu__item}>
      <img src={icones.path} alt={icones.alt} />
      <a href="/">{icones.link}</a>
    </li>
  )
}  