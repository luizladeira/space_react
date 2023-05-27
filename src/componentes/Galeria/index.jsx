import React from 'react'
import Tags from '../../componentes/Tags'
import styles from '../Galeria/css/Galeria.module.scss'
import fotosJson from '../Galeria/json/fotos.json'
import botaoFavoritar from '../Galeria/cards/favorito.png'
import botaoAbriModal from '../Galeria/cards/open.png'

export default function Galeria() {
    return (
        <div className={styles.galeria}>
            <section className={styles.galeria__menu}>
                <h2 >Navegue pela Galeria</h2>
                <Tags />
                <ul className={styles.galeria__cards}>
                    {fotosJson.map((fotosJson) => {
                        return (
                            <li key={fotosJson.id} className={styles.galeria__card}>
                                <img
                                    className={styles.galeria__imagem}
                                    src={fotosJson.imagem}
                                    alt={fotosJson.titulo}
                                />
                                <p className={styles.galeria__description}>
                                    {fotosJson.titulo}
                                </p>
                                <div>
                                    <p> {fotosJson.creditos} </p>
                                    <span>
                                        <img src={botaoFavoritar} alt="ícone coração de curtir" />
                                        <img src={botaoAbriModal} alt="ícone de abrir modal" />
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </section>
        </div>
    )
}
