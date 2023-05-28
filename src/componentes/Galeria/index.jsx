import React from 'react'
import Tags from '../../componentes/Tags'
import styles from '../Galeria/css/Galeria.module.scss'
import fotosJson from '../Galeria/json/fotos.json'
import Cards from './Cards'

export default function Galeria() {
    return (
        <div className={styles.galeria}>
            <section className={styles.galeria__menu}>
                <h2 >Navegue pela Galeria</h2>
                <Tags />
                <Cards itens={fotosJson} styles={styles} />

            </section>
        </div>
    )
}
