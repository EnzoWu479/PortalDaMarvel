import React from "react";
import Logo from "../Logo";
import {
    Nav, 
    Direita, 
    Opcoes
} from "./styled"

function Cabecalho({selecionado}){
    return(
        <Nav>
            <Logo Size={35}/>
            <Direita>
                <Opcoes 
                selecionado={selecionado === 1} 
                href="/">
                    Personagens
                </Opcoes>
                <Opcoes 
                selecionado={selecionado === 2} 
                href="/filmes">
                    Filmes
                </Opcoes>
                <Opcoes 
                selecionado={selecionado === 3} 
                href="/hqs">
                    HQs
                </Opcoes>
            </Direita>
        </Nav>
    )
}
export default Cabecalho;