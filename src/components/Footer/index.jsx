import React from 'react';
import Foot from './styled';

function Footer() {
  return (
    <Foot>
      Site criado por
      {' '}
      <a href="https://www.linkedin.com/in/enzo-wu-41b2ba22a/" rel="noreferrer" target="_blank">Enzo Wu</a>
      {' '}
      para fins de estudo com o uso do React e APIs
      {' '}
      <a href="https://developer.marvel.com" rel="noreferrer" target="_blank">Marvel</a>
      {' '}
      e
      {' '}
      <a href="https://www.themoviedb.org" rel="noreferrer" target="_blank">TheMovieDB</a>
    </Foot>
  );
}
export default Footer;
