import React from "react";
import styled from "styled-components";


const Texto = styled.a`
    font-family: "Marvel", sans-serif;
    
    font-weight: 100;
    text-decoration: none;
    background: linear-gradient(to right, red 80%, transparent 80%);
    display: inline-block;
    color: white;
    padding: 2px 2px;
    margin: 0;
`;

function Logo({Size}){
    return(
        <Texto href="/" style={{
            fontSize: `${Size}px`
        }}>
            MARVEL
        </Texto>
    );
};
export default Logo;
