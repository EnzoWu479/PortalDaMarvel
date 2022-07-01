import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 1px red;
    height: 10vh;
    background-color: #000;
    
    @media(max-width: 760px){
        z-index: 5;
    }
`;
export const Right = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 760px){
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100vw;
        background-color: black;
        
        ${(props) => (props.open ? `
            top: calc(10vh + 1px);
            z-index: 15;
            opacity: 1;
        ` : `
            top: -180px;
            z-index: -1;
            opacity: 0;
        `)}
        
        transition: all ease 0.4s;
    }
`;
export const Options = styled.a`
    margin-right: 8vw;
    color: ${(props) => (props.selecionado ? 'white' : '#161616')};
    text-decoration: none;
    font-weight: ${(props) => (props.selecionado ? 'bold' : 'normal')};
    cursor: pointer;
    @media(max-width: 760px){
        border-bottom: 1px solid gray;
        font-size: 16px;
        height: 45px;
        width: 100%;
        margin-right: 0;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
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
    button{
        background-color: transparent;
        margin: 0;
        font-weight: 100;
        cursor: pointer;
        color: #161616;
        font-size: 18px;
    }
    @media(max-width: 760px){
        height: 45px;
        margin-right: 0;
    }
`;
export const LogoArea = styled.div`
    margin-left: 20px;

`;
export const MenuButton = styled.button`
    display: none;
    background-color: transparent;
    color: white;
    font-size: 40px;
    @media(max-width: 760px){
        display: inline-block;
        
    }

`;
