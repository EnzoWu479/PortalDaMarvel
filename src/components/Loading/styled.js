import styled from 'styled-components';

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
export const Blink = styled.div`
    animation: blink 2s infinite;
  @keyframes blink{
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
