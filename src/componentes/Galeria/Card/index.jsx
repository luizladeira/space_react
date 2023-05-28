import React from 'react'
import botaoFavoritar from './images/favorito.png'
import botaoAbriModal from './images/open.png'

export default function Card({ item, styles }) {
    console.log(item);
    return (
        <li key={item.id} className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={item.imagem}
                alt={item.titulo}
            />
            <p className={styles.galeria__description}>
                {item.titulo}
            </p>
            <div>
                <p> {item.creditos} </p>
                <span> 
                    <img src={botaoFavoritar} alt="ícone coração de curtir" />
                    <img src={botaoAbriModal} alt="ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}
