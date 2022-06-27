import styled from "styled-components";

export const Load = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Pisca = styled.div`
    animation: pisca 2s infinite;
  @keyframes pisca{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
  }
`;
