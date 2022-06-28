import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 1px red;
    height: 10vh;
    background-color: #000;
`;
export const Direita = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
`;
export const Opcoes = styled.a`
    margin-right: 8vw;
    color: ${(props)=>( props.selecionado ? "white": "#161616")};
    text-decoration: none;
    font-weight: ${(props)=>( props.selecionado ? "bold": "normal")};
    cursor: pointer;
`;
export const Perfil = styled.div`
    display: flex;
    align-items: center;
    margin-right: 60px;
    img{
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
    p{
        font-weight: 100;
        cursor: pointer;
        color: #161616;
    }

`;