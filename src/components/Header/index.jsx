import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import Logo from '../Logo';
import { AuthContext } from '../../contexts/auth';
import {
  Nav,
  Right,
  Options,
  Perfil,
  LogoArea,
  MenuButton,
} from './styled';

function Header({ selecionado }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <LogoArea>
        <Logo Size={35} />
      </LogoArea>

      <Right open={open}>
        <Options
          selecionado={selecionado === 1}
          onClick={() => (navigate('/'))}
        >
          Personagens
        </Options>
        <Options
          selecionado={selecionado === 2}
          onClick={() => (navigate('/filmes'))}
        >
          Filmes
        </Options>
        <Options
          selecionado={selecionado === 3}
          onClick={() => (navigate('/hqs'))}
        >
          HQs
        </Options>
        <Perfil>
          <img src="https://i.pinimg.com/474x/05/c0/17/05c017d6f59524125639efc1be2d1660.jpg" alt="perfil" />
          <button
            onClick={() => (logout())}
            onKeyDown={() => (logout())}
            tabIndex={0}
            type="button"
          >
            Sair

          </button>
        </Perfil>
      </Right>
      <MenuButton onClick={() => (setOpen(!open))}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
    </Nav>
  );
}
Header.propTypes = {
  selecionado: propTypes.number.isRequired,
};
export default Header;
