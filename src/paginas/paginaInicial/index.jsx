import Cabecalho from "../../componentes/Cabecalho";
import Banner from "../../componentes/Banner";
import Galeria from "../../componentes/Galeria";
import Rodape from "../../componentes/Rodape";
import FotosPopulares from "../../componentes/Populares";

//fragment - <> </>
export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <Banner />
            <FotosPopulares />
            <Galeria />
           
            <Rodape />
        </>
    )
}