import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Body, Center } from '../../components/GlobalStyle';
import Row from '../../components/Row';
import Marvel from '../../Marvel';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';

function Comics() {
  document.title = 'Portal Marvel | Hqs';
  const [hqList, setHqList] = useState([]);
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    const Load = async () => {
      const hq = await Marvel.getComics();
      const availableHq = [];
      const description = [];
      const nodesc = [];
      hq.data.results.map((item) => (
        (item.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
                && availableHq.push(item)
      ));
      availableHq.map((a) => (a.description ? description.push(a) : nodesc.push(a)));
      setHqList(description.concat(nodesc));
      setTimeout(() => (setLoaded(false)), 1500);
    };
    Load();
  }, []);
  return (
    <Body>
      <Header selecionado={3} />
      <Center>
        <Row items={hqList} type="Marvel" />
      </Center>
      {loaded
                && <Loading />}
      <Footer />
    </Body>
  );
}
export default Comics;
