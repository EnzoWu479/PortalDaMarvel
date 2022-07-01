import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 40px;
    width: 150px;
    
`;
export const SelectBox = styled.div`
    width: 150px;
    height: ${(props) => (props.opened ? '120px' : '40px')};
    border-radius: 10px;
    border: 1px solid red;
    color: red;
    font-size: 16px;
    transition: all ease 0.2s;
    display: flex;
    flex-direction: column;
    
    
    background-color: black;
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
    z-index: 10;
`;
export const Choosen = styled.div`
    height: 40px;
    padding: 10px 15px;
`;
export const OptionBox = styled.div`
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: all ease 0.1s;
    padding: 11px 15px;
    border-radius: 10px;
    
    font-weight: 100;
    &:hover{
        background-color: #111;
    }
`;

export const Icon = styled.i`
    position: relative;
    bottom: ${(props) => (props.opened ? '40px' : '0px')};
    transition: all ease 0.2s;
    left: 125px;
    color: red;
    z-index: 10;
`;
