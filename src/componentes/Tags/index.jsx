import React from 'react'
import styles from '../Tags/css/Tags.module.scss'
import fotosJson from '../Galeria/json/fotos.json'

export default function Tags({tags, filtraFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por TAGS: </p>
        <ul className={styles.tags__lista}>
           {tags.map((tag) => {
             return <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>;
           })} 
           <li onClick={ ()=> setItens(fotosJson) }> Todas </li>  
        </ul>
    </div>
  )
}
