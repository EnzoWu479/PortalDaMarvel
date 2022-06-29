import React, {useState, useContext} from "react";
import { Form, Error, Container } from "./styled";
import { AuthContext } from "../../contexts/auth";

const FormsLogin = ({time}) => {
    const {login} = useContext(AuthContext);

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [salvar, setSalvar] = useState(true);
    const [erro, setErro] = useState(false);

    const userSubmit = (event) => {
        event.preventDefault();
        if(!login(usuario, senha, salvar)){
            setErro(true);
        };
    };
    return(
        <Form onSubmit={userSubmit} opacity={time}>
                <h1>Bem-vindo(a) de volta!</h1>
                <p>Acesse sua conta:</p>
                {erro && 
                <Error>Usuario ou senha Inválidos!</Error>
                }
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
                <Container>
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
                </Container>
                <input type="submit" value="Entrar"/>
                <p id="cadastro">Ainda não tem login? <a href="/cadastro">Cadastre-se</a></p>
            </Form>
    )
}
export default FormsLogin;