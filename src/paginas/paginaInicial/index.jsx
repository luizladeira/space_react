import Cabecalho from "../../componentes/Cabecalho";
import Banner from "../../componentes/Banner";
import Galeria from "../../componentes/Galeria";
import Rodape from "../../componentes/Rodape";

//fragment - <> </>
export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <Banner />
            <Galeria />
            <Rodape />
        </>
    )
}