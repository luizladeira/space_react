//criar estrutura react - rfc
import React from 'react'
import styles from '../Rodape/css/Rodape.module.scss'
import facebook from '../Rodape/images/facebook.svg'
import instagram from '../Rodape/images/instagram.svg'
import twitter from '../Rodape/images/twitter.svg'

export default function Rodape() {

    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a
                    href="https://www.facebook.com/luizpauloladeira/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook} alt="ícone do facebook" />
                </a>
                <a
                    href="https://twitter.com/luiz__ladeira"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt="ícone do twitter" />
                </a>
                <a
                    href="https://www.instagram.com/luiz__ladeira"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="ícone do instagram" />
                </a>
            </div>
            <p> Curso/Layout da <b>Alura</b> - React com Javascript: lidando com arquivos estáticos</p>
        </footer>
    )
}

