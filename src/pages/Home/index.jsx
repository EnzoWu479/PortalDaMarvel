import React, {useState, useEffect} from "react";
import Marvel from "../../Marvel";
import Cabecalho from "../../components/Cabecalho";
import { Body, Center } from "../../components/GlobalStyle";
import Row from "../../components/Row";
import Loading from "../../components/Loading";

function Home({items}){
    const [characterList, setCharacterList] = useState([]);
    const [loaded, setLoaded] = useState(true);
    useEffect(()=>{
        const Load = async () =>{
            let characters = await Marvel.getCharacters();
            console.log(characters);
            let availableCharacters = [];
            let description = [];
            let nodesc = [];
            characters.data.results.map((item) => ((item.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available")? availableCharacters.push(item) : ""));
            availableCharacters.map((a) => (a.description ? description.push(a) : nodesc.push(a)))
            setCharacterList(description.concat(nodesc));
            setTimeout(()=>(setLoaded(false)), 1500);
        }
        Load();
      }, []);
    return(
        <Body>
            <Cabecalho selecionado={1}/>
            <Center>
                <Row items={characterList} type={"Marvel"} character/>
            </Center>
            {loaded &&
                <Loading/>
            }
        </Body>
    )
}
export default Home;
