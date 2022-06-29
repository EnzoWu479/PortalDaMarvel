import styled from "styled-components";

export const Movimenta = styled.div`
    ${
        (props) => (props.time ? `
            transform: scale(0.8);
            right: 25%;
            bottom: 30%;
            @media(max-width: 760px){
                right: 0;
            }
        ` : `
            right: 0;
            bottom: 0;
        `)
    }
    width: 100%;
    height: 100%;

    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease 1s;

`;
export const Body = styled.div`
    height: 100vh;
    width: 100vw;

`;
