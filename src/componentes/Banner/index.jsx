import React from 'react'
import Menu from '../Menu/';
import Banner from '../Banner/images/banner.png'
import styles from '../Banner/css/Banner.module.scss'

export default function index() {
  return (
    <main>
        <section className={styles.principal}>
           <Menu />
           <div className={styles.principal__imagem}>
                <h1> A galeria mais completa do espaço</h1>
                <img src={Banner} alt="A imagem da terra vista do espaço" />
            </div> 
        </section>
    </main>
  )
}
