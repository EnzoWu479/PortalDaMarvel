import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body{
        background:linear-gradient(to right, #000000 25%,#242424de 50%, transparent 60%, #000000af 80%, #000 90%), url(https://www.themoviedb.org/t/p/original/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg);
        background-size: 100%;
        background-position: 20% 25%;
        color: #fff;
        margin: 0;
        font-weight: 700;
        font-family: sans-serif;
        @media (max-width: 760px){
            background-size: cover;
        }
    }
    footer{
        margin: 20px 0;
        text-align: center;
    }
`;
export const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to left, #242424de,transparent);
    
`;
export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 10vh);
`;