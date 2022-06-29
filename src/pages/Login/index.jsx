import React, {useState} from "react";

import { Movimenta, Body} from "./styled";
import Logo from "../../components/Logo";
import Rodape from "../../components/Rodape";
import FormsLogin from "../../components/FormsLogin";

function Login(){
    const [time, setTime] = useState(false);
    setTimeout(()=>(setTime(true)), 1000);
    return(
        <Body>
            <Movimenta time={time}>
                <Logo Size={80}/>
            </Movimenta>
            <FormsLogin time={time}/>
            <Rodape/>
        </Body>
    )
}
export default Login;