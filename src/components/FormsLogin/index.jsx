import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { Form, Error, Container } from './styled';
import { AuthContext } from '../../contexts/auth';

function FormsLogin({ time }) {
  const { login } = useContext(AuthContext);

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [save, setSave] = useState(true);
  const [error, setError] = useState(false);

  const userSubmit = (event) => {
    event.preventDefault();
    if (!login(user, password, save)) {
      setError(true);
    }
  };
  return (
    <Form onSubmit={userSubmit} opacity={time}>
      <h1>Bem-vindo(a) de volta!</h1>
      <p>Acesse sua conta:</p>
      {error
                && <Error>Usuario ou senha Inválidos!</Error>}
      <input
        required
        placeholder="Usuário"
        id="user"
        name="user"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        required
        placeholder="Senha"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Container>
        <div>
          <label htmlFor="save">
            <input
              type="checkbox"
              id="save"
              checked={save}
              onChange={() => (setSave(!save))}
            />
            Salvar login
          </label>

        </div>
        <a href="/esquecisenha">Esqueci a password</a>
      </Container>
      <input type="submit" value="Entrar" />
      <p id="cadastro">
        Ainda não tem login?
        <a href="/cadastro">Cadastre-se</a>
      </p>
    </Form>
  );
}
FormsLogin.propTypes = {
  time: propTypes.bool.isRequired,
};
export default FormsLogin;
