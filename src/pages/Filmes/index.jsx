import React, {useEffect, useState} from "react";
import Tmdb from "../../Tmdb";
import { Body, Center } from "../../components/GlobalStyle";
import Select from "../../components/Select";
import Cabecalho from "../../components/Cabecalho";
import Row from "../../components/Row";
import Loading from "../../components/Loading";

function Filmes(){
    const [movieList, setMovieList] = useState([]);
    const [movieAZ, setMovieAZ] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [select, setSelect] = useState(null);
    useEffect(()=>{
        const Load = async () =>{
            let movies = await Tmdb.getMoviesInfo();
            setMovieList(movies.items);
            let moviesAZ = [...movies.items]
            moviesAZ.sort((a, b) => (
                (a.title ? a.title : a.name) > (b.title ? b.title : b.name) ? 1 : ((a.title ? a.title : a.name) < (b.title ? b.title : b.name) ? -1 : 0)
            ));
            setMovieAZ(moviesAZ);
            setTimeout(()=>(setLoaded(false)), 1500);
            console.log(movies);
        }
        Load();
      }, []);
    return(
        <Body>
            <Cabecalho selecionado={2}/>
            <Center>
                <Select selecionado={select} setSelecionado={setSelect} />
                <Row items={select === "A-Z" ? movieAZ : movieList} type="tmdb"/>
            </Center>
            {loaded &&
                <Loading/>
            }
        </Body>
    )
}
export default Filmes;