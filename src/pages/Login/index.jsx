import { Body, Form } from "./styled";
import React from "react";
import {Navigate} from "react-router";
import { useState } from "react";
import { Movimenta } from "./styled";
import Logo from "../../components/Logo";
function Login({logged}){
    const [time, setTime] = useState(false);
    setTimeout(()=>(setTime(true)), 1000);
    const entrar = () => {
        logged(document.getElementById("usuario").value)
    }
    return(
        logged ? <Navigate replace to="/"/> :
        <Body>
            <Movimenta time={time}>
                <Logo Size={80}/>
            </Movimenta>
            <Form opacity={time} onSubmit={entrar}>
                <h1>Bem-vindo(a) de volta!</h1>
                <p>Acesse sua conta:</p>
                <input required placeholder="Usuário" id="usuario"/>
                <input required placeholder="Senha" id="senha"/>
                <div>
                    <div>
                        <input type={"checkbox"} id="save"/>
                        <label htmlFor="save">Salvar login</label>
                    </div>
                    <a href="/esquecisenha">Esqueci a senha</a>
                </div>
                <input type="submit" value="Entrar"/>
                <p id="cadastro">Ainda não tem login? <a href="/cadastro">Cadastre-se</a></p>
            </Form>
        </Body>
    )
}
export default Login;