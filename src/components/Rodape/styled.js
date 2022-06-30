import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #000;
    margin: 0;
    width: 100%;
    font-weight: 100;
    position: absolute;
    padding: 10px 0;
    bottom: 0;
    a{
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
    a:nth-child(1){
        color: #0A66C2;
    }
    a:nth-child(2){
        color: red;
    }
    a:nth-child(3){
        color: cyan;
    }
    @media(max-width: 760px){
        font-size: 14px;
    }
`;