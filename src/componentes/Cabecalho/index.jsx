import logo from './images/logo.png'
import search from './images/search.png'
import styles from './css/Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Site" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?" />
                <img src={search} alt="Pesquisa" />
            </div>
        </header>
    )
}