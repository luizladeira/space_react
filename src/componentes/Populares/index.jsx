import React from 'react'
import Styles from './css/Populares.module.scss'
import FotosPopularesJson from './json/fotos-populares.json'
import botaoAbriModal from '../Galeria/Card/images/open.png'
import Botao from '../Botao'

export default function Populares() {
  return (

    <div className={Styles.populares}>
      <section className={Styles.populares__menu}>
        <h2 >Populares</h2>
        <ul className={Styles.populares__cards}>
          {
            FotosPopularesJson.map((FotosPopularesJson) => {
              return (
                <li key={FotosPopularesJson.id} className={Styles.populares__card}>
                  <img src={FotosPopularesJson.path} alt={FotosPopularesJson.alt} className={Styles.populares__imagem} />
                  <p className={Styles.populares__description}>
                    {FotosPopularesJson.titulo}
                  </p>
                  <div>
                    <span>
                      <img src={botaoAbriModal} alt="ícone de abrir modal" />
                    </span>
                  </div>
                </li>

              )
            })
          }
        </ul>

      <Botao botaoFilho="Ver Mais" />

      </section>
    </div>



  )
}
