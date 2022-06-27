import React, {useEffect, useState} from "react";
import Cabecalho from "../../components/Cabecalho";
import { Body, Center } from "../../components/GlobalStyle";
import Row from "../../components/Row";
import Marvel from "../../Marvel";
import Loading from "../../components/Loading";

function Hq(){
    const [hqList, setHqList] = useState([]);
    const [loaded, setLoaded] = useState(true);
    useEffect(()=>{
        const Load = async () =>{
            let hq = await Marvel.getComics();
            let availableHq = [];
            let description = [];
            let nodesc = [];
            hq.data.results.map((item) => (
                (item.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") && 
                availableHq.push(item)
            ));
            availableHq.map((a) => (a.description ? description.push(a) : nodesc.push(a)))
            setHqList(description.concat(nodesc));
            console.log(availableHq);
            setTimeout(()=>(setLoaded(false)), 1500);
        }
        Load();
      }, []);
    return(
        <Body>
            <Cabecalho selecionado={3}/>
            <Center>
                <Row items={hqList} type={"Marvel"}/>
            </Center>
            {loaded &&
                <Loading/>
            }
        </Body>
    )
}
export default Hq;
