import { useState } from "react";
import { 
    Lista, 
    ListArea, 
    Item, 
    Infos,
    Roll,
    Icon,
    Box,
    Detalhes,
    Container,
    Preto,
    XIcon,
    Criticas,
    Lancamento,
    InfoAdicion
} from "./styled";
import Estrelas from "../Estrelas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const Row = ({items, type, character}) => {
    const [scrollX, setScrollX] = useState(0);
    const [onSpot, setOnSpot] = useState(null);

    const borda = () => ((window.innerWidth - (window.innerWidth * 0.84) - 20 * (window.innerWidth < 760 ? 0 : window.innerWidth > 1000 ? 2 : 1))/2);
    
    const handleLeftArrow = () => {
        let x = scrollX + window.innerWidth - borda();
        if(x > 0){
            x = 0;
        };
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - window.innerWidth + borda();
        let widthMax = (items.length/3).toFixed(0) * ((window.innerWidth*0.84) + 40 + borda());
        if((window.innerWidth - widthMax) > x){
            x = (window.innerWidth - widthMax) - 60;
        };
        setScrollX(x);
    }
    
    
    return(
        <Roll>
            <Icon onClick={handleLeftArrow} className="Nav">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Icon>
            <Icon Right onClick={handleRightArrow} className="Nav">
                <FontAwesomeIcon icon={faArrowRight} />
            </Icon>
            <ListArea>
                <Lista style={{
                    width: items.length * (items.length/3).toFixed(0) * (1090 + borda()),
                    marginLeft: scrollX
                }}>
                    {
                        items.length > 0 && items.map((item, key) => (
                            <Container key={key} opened={onSpot === key}>
                                <Item opened={onSpot === key} style={{
                                    backgroundImage: `url(${type === "Marvel" ? item.thumbnail.path : ("https://image.tmdb.org/t/p/w400" + item.poster_path)}${type === "Marvel" ? "." + item.thumbnail.extension : ""})`
                                }}>
                                </Item>
                                <Box opened={onSpot === key} className="Caixa">
                                    <Infos opened={onSpot === key}>
                                        <h1>
                                            {character ? item.name : (item.title ? item.title : item.name)}
                                        </h1>
                                        {(onSpot !== key || type !== "Marvel" ) &&
                                        <p>
                                            {type === "Marvel" ? (item.description ? item.description : "Sem descrição") : item.overview ? item.overview : "Sem descrição"}
                                        </p>
                                        }
                                        {
                                            onSpot === key && type!== "Marvel" && 
                                            <Criticas>
                                            Critica
                                            <Estrelas rate={item.vote_average}/>
                                            </Criticas>
                                        }
                                        {
                                            onSpot === key && type === "Marvel" && item.events.items.length > 0 &&
                                            <InfoAdicion>
                                                <h2>Eventos:</h2>
                                                {item.events.items.map((item, i)=>(
                                                    i < 5 && <p>{item.name}</p>
                                                ))}
                                            </InfoAdicion>
                                        }
                                        {
                                            onSpot === key && type === "Marvel" && item.characters &&
                                            <InfoAdicion>
                                                <h2>Personagens: </h2>
                                                {item.characters.items.map((item, i) =>(
                                                    i < 5 && <p>{item.name}</p>
                                                ))}
                                            </InfoAdicion>
                                        }
                                        {
                                            onSpot === key && type === "Marvel" && item.creators &&
                                            <InfoAdicion>
                                                <h2>Criadores: </h2>
                                                {item.creators.items.map((item, i) =>(
                                                    i < 5 && <p>{item.name}</p>
                                                ))}
                                            </InfoAdicion>
                                        }
                                        {
                                            onSpot === key && type === "Marvel" && item.comics &&
                                            <InfoAdicion>
                                                <h2>Hqs: </h2>
                                                {item.comics.items.map((item, i) =>(
                                                    i < 5 && <p>{item.name}</p>
                                                ))}
                                            </InfoAdicion>
                                        }
                                        {
                                            onSpot === key && type!== "Marvel" && item.release_date &&
                                            <Lancamento>
                                                Data de lançamento:<br/>
                                                { `${item.release_date.split("-")[2]}/${item.release_date.split("-")[1]}/${item.release_date.split("-")[0]}`}
                                            </Lancamento>
                                        }
                                    </Infos>
                                    {
                                        onSpot !== key &&
                                        <Detalhes onClick={() => (setOnSpot(key))}>
                                            Ver Detalhes
                                        </Detalhes>
                                    }
                                    
                                </Box>
                                {
                                    onSpot === key &&
                                    <XIcon onClick={() => (setOnSpot(null))} className="XIcon">
                                        <FontAwesomeIcon icon={faCircleXmark} type={"regular"}/>
                                    </XIcon>
                                }
                            </Container>
                        ))
                    }
                </Lista>
            </ListArea>
            {onSpot !== null &&
                <Preto/>
            }
        </Roll>
    )
}
export default Row;