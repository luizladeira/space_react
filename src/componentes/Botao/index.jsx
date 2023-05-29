import React from 'react'
import Styles from './css/Botao.module.scss'

export default function Botao({botaoFilho}) {
  return (
    <button className={Styles.botao}>{botaoFilho}</button>
  )
}
