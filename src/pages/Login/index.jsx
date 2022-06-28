import React, {useState, useContext} from "react";
import { AuthContext } from "../../contexts/auth";

import { Movimenta, Body, Form } from "./styled";
import Logo from "../../components/Logo";
function Login(){
    const {login} = useContext(AuthContext);

    const [time, setTime] = useState(false);
    setTimeout(()=>(setTime(true)), 1000);

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [salvar, setSalvar] = useState(true);

    const userSubmit = (event) => {
        event.preventDefault();
        login(usuario, senha, salvar);
    };
    return(
        <Body>
            <Movimenta time={time}>
                <Logo Size={80}/>
            </Movimenta>
            <Form opacity={time} onSubmit={userSubmit}>
                <h1>Bem-vindo(a) de volta!</h1>
                <p>Acesse sua conta:</p>
                <input 
                required 
                placeholder="Usuário" 
                id="usuario"
                name="user"
                type="text"
                value={usuario}
                onChange={(e)=> setUsuario(e.target.value)}
                />
                <input 
                required 
                placeholder="Senha" 
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
                <div>
                    <div>
                        <input 
                        type={"checkbox"}
                        id="save"
                        checked={salvar}
                        onChange={() => (setSalvar(!salvar))}
                        />
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