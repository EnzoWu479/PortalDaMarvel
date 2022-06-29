import styled from "styled-components";

export const Form = styled.form`
    width: 25vw;
    min-width: 220px;
    
    display: flex;
    flex-direction: column;
    transition: all ease 1.5s;
    opacity: ${(props) => (props.opacity ? 1 : 0)};
    font-weight: 100;
    position: absolute;
    left: 12%;
    top: 30%;
    h1{
        color: red;
        font-weight: 100;
        margin: 0;
        font-size: 24px;
    }
    p{
        margin: 0;
        color: #74747B;
    }
    #cadastro{
        text-align: center;
        margin-top: 15px;
        a{
            color: red;
            text-decoration: none;
        }
    }
    input{
        width: 100%;
        height: 50px;
        border-radius: 30px;
        padding-left: 20px;
        margin-top: 10px;
        font-size: 18px;
    }
    input[type=submit]{
        background-color: red;
        color: white;
        font-size: 20px;
        margin-top: 15px;
        cursor: pointer;
    }
    input[type=checkbox]{
        margin: 0;
        height: 13px;
        width: 13px;
        margin-right: 5px;
        margin-left: 10px;
    }
    @media (max-width: 760px) {
        left: calc(50% - 110px);
        background-color: #000c;
        border-radius: 20px;
        h1{
            font-size: 20px;
            text-align: center;
        }
        p{
            text-align: center;
        }
        
    }
`;
export const Container = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-top: 15px;
    
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        label{
            font-size: 13px;
            color: #505055;
        }
    }
    a{
        color: #505055;
        text-decoration: none;
        border-bottom: 1px solid red;
        font-size: 13px;
        height: 20px;
        margin-right: 10px;
    }
`;
export const Error = styled.div`
    background: linear-gradient(to right, transparent, #F00C, transparent);
    font-size: 18px;
    
    text-align: center;
    width: 100%;
`;