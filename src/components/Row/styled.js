import styled from "styled-components";

export const Lista = styled.div`
    transition: all ease 0.5s;
    
`;
export const ListArea = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
`;
export const Container = styled.div`
    display: inline-block;
    width: 28vw;
    height: calc(28vw * 1.5);
    max-width: 350px;
    max-height: 525px;

    min-width: 200px;
    min-height: 300px;

    transition: all ease 0.2s;
    margin-left: ${(props) => (props.first ? `calc((100vw - (28vw * 3 + 20px * 2))/2)` : '20px')};

    z-index: ${(props) => (props.opened ? 60 : -2)};
    position: ${(props) => (props.opened ? "absolute" : "static")};
    transform: ${(props) => (props.opened ? "scale(1)" : "scale(0.9)")};
    &:hover{
        transform: scale(1);
    };
`;
export const Item = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 20px;
`;
export const Box = styled.div`
    ${
        (props) => (props.opened ? (`
            background: linear-gradient(to right, red, rgb(33, 3, 0));
            width: 400px;
            height: 100%;
            bottom: 100%;
            left: ${props.left ? "-100%" : "90%"};
            z-index: -1;
            ${props.left ? `padding-right: 50px;` : `padding-left: 50px;`}
            
        `
        ) : (`
            background: linear-gradient(to bottom, #ff0000d6 50%, #ff000096);
            height: 50%;
            bottom: 50%;
            left: 0;
            z-index: 1;
        `))
    }
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    transition: all ease 0.2s;
    
    border-radius: 20px;
`;
export const Infos = styled.div`
    h1{
        position: ${(props) => (props.opened ? "static" : "absolute")};
        font-size: 20px;
        text-align: center;
        width: inherit;
        top: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding: 0 15px;

    }
    p{
        position: ${(props) => (props.opened ? "static" : "absolute")};
        top: 50px;
        padding: 0 15px;
        box-sizing: border-box;
        font-weight: 100;
        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${(props) => (props.opened ? 12 : 6)};
        -webkit-box-orient: vertical;
    }
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 30px;
    object-fit: cover;
`;

export const Roll = styled.div`
    &:hover .Nav{
        opacity: 1;
    }
`;
export const Icon = styled.div`
    font-size: 30px;
    position: absolute;
    width: 40px;
    height: calc(28vw * 1.5 );
    min-height: 300px;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    cursor: pointer;
    transition: all ease 0.5s;
    opacity: 0;
    ${(props) => (props.Right ? "right: 0" : "left: 0")};
    @media (max-width: 760px){
        opacity: 1;
    }
`;
export const Detalhes = styled.button`
    border: none;
    border-top: white 1px solid;
    background-color: transparent;
    color: white;
    font-size: 20px;
    height: 50px;
    transition: all ease 0.2s;
    &:hover{
        font-size: 25px;
        cursor: pointer;
    }
`;
export const Preto = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    background: linear-gradient(to right, black, #111111a3);
`;
export const XIcon = styled.div`
    color: #FFF;
    position: absolute;
    font-size: 30px;
    
    ${(props) => (props.left ? `
        bottom: 20px;
        left: 300px;
    ` : 
    `
        bottom: 20px;
        left: 660px;
    `)}
    cursor: pointer;
`;

export const Criticas = styled.div`
    padding: 15px;
    font-size: 18px;
`;
export const Lancamento = styled.div`
    padding: 15px;
    font-size: 16px;
`;
export const Eventos = styled.div`
    h2{
       font-size: 18px; 
    }
    p{
        margin: 10px 0;
    }
    padding: 0 15px;
    overflow-x: hidden;
`;