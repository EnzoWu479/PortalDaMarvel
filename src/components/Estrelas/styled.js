import styled from "styled-components";

export const StarsArea = styled.div`
    display: flex;
`;
export const Star = styled.div`
    color: ${(props) => (props.fill ? "#FFB300" : "white")};
    font-size: 30px;
    width: 30px;
    margin-right: 5px;
    margin-top: 10px;
`;