import React, { useState } from 'react'
import Tags from '../../componentes/Tags'
import styles from '../Galeria/css/Galeria.module.scss'
import fotosJson from './json/fotos.json'
import Cards from './Cards'


export default function Galeria() {

    const [itens, setItens] = useState(fotosJson); //hooks states
    const tags = [...new Set(fotosJson.map((valor) => valor.tag))]
    const filtrarFotos = (tag) => {
        const novasFotos = fotosJson.filter((foto) => {
            return foto.tag === tag;
        })

        setItens(novasFotos);
    };

    return (
        <div className={styles.galeria}>
            <section className={styles.galeria__menu}>
                <h2 >Navegue pela Galeria</h2>
                <Tags tags={tags} filtraFotos={filtrarFotos} setItens={setItens} />
                <Cards itens={itens} styles={styles} />
            </section>
        </div>
    )
}
