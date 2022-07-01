import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import { Body, Center } from '../../components/GlobalStyle';
import Select from '../../components/Select';
import Header from '../../components/Header';
import Row from '../../components/Row';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';

function Movies() {
  document.title = 'Portal Marvel | Filmes';
  const [movieList, setMovieList] = useState([]);
  const [movieAZ, setMovieAZ] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [select, setSelect] = useState(null);
  useEffect(() => {
    const Load = async () => {
      const movies = await Tmdb.getMoviesInfo();
      setMovieList(movies.items);
      const moviesAZ = [...movies.items];
      moviesAZ.sort((a, b) => {
        if ((a.title ? a.title : a.name) > (b.title ? b.title : b.name)) {
          return 1;
        } if ((a.title ? a.title : a.name) < (b.title ? b.title : b.name)) {
          return -1;
        } return 0;
      });
      setMovieAZ(moviesAZ);
      setTimeout(() => (setLoaded(false)), 1500);
    };
    Load();
  }, []);
  return (
    <Body>
      <Header selecionado={2} />
      <Center>
        <Select selecionado={select} setSelecionado={setSelect} />
        <Row items={select === 'A-Z' ? movieAZ : movieList} type="tmdb" />
      </Center>
      {loaded
                && <Loading />}
      <Footer />
    </Body>
  );
}
export default Movies;
