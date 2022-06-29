import React from "react";
import { Texto } from "./styled";

const Logo = ({Size}) => {
    return(
        <Texto href="/" style={{
            fontSize: `${Size}px`
        }}>
            MARVEL
        </Texto>
    );
};
export default Logo;
