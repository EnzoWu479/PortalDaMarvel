import React, { useState } from 'react';

import { Move, Body } from './styled';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import FormsLogin from '../../components/FormsLogin';

function Login() {
  document.title = 'Portal Marvel | Login';
  const [time, setTime] = useState(false);
  setTimeout(() => (setTime(true)), 1000);
  return (
    <Body>
      <Move time={time}>
        <Logo Size={80} />
      </Move>
      <FormsLogin time={time} />
      <Footer />
    </Body>
  );
}
export default Login;
