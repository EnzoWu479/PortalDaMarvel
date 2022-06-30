import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../Logo";
import { AuthContext } from "../../contexts/auth";
import {
    Nav, 
    Direita, 
    Opcoes,
    Perfil,
    LogoArea,
    MenuButton
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Cabecalho({selecionado}){
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    return(
        <Nav>
            <LogoArea>
                <Logo Size={35}/>
            </LogoArea>
            
            <Direita open={open}>
                <Opcoes 
                selecionado={selecionado === 1} onClick={()=>(navigate("/"))}>
                    Personagens
                </Opcoes>
                <Opcoes 
                selecionado={selecionado === 2} 
                onClick={()=>(navigate("/filmes"))}>
                    Filmes
                </Opcoes>
                <Opcoes 
                selecionado={selecionado === 3} 
                onClick={()=>(navigate("/hqs"))}>
                    HQs
                </Opcoes>
                <Perfil>
                    <img src="https://i.pinimg.com/474x/05/c0/17/05c017d6f59524125639efc1be2d1660.jpg" alt="perfil" />
                    <p onClick={() => (logout())}>Sair</p>
                </Perfil>
            </Direita>
            <MenuButton onClick={() => (setOpen(!open))}>
                <FontAwesomeIcon icon={faBars}/>
            </MenuButton>
        </Nav>
    )
}
export default Cabecalho;