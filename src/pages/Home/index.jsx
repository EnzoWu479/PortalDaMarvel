import React, { useState, useEffect } from 'react';
import Marvel from '../../Marvel';
import Header from '../../components/Header';
import { Body, Center } from '../../components/GlobalStyle';
import Row from '../../components/Row';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';

function Home() {
  document.title = 'Portal Marvel | Personagens';
  const [characterList, setCharacterList] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const Load = async () => {
      const characters = await Marvel.getCharacters();
      const availableCharacters = [];
      const description = [];
      const nodesc = [];
      characters.data.results.map((item) => ((item.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') ? availableCharacters.push(item) : ''));
      availableCharacters.map((a) => (a.description ? description.push(a) : nodesc.push(a)));
      setCharacterList(description.concat(nodesc));
      setTimeout(() => (setLoaded(false)), 1500);
    };
    Load();
  }, []);
  return (
    <Body>
      <Header selecionado={1} />
      <Center>
        <Row items={characterList} type="Marvel" character />
      </Center>
      {loaded
                && <Loading />}
      <Footer />
    </Body>
  );
}
export default Home;
