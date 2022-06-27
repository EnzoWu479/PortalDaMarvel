import { StarsArea, Star } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Estrelas = ({rate}) => {
    return(
        <StarsArea>
            <Star 
            fill={(Math.round(rate) >= 2) ? true : undefined}
            ><FontAwesomeIcon icon={faStar}/></Star>
            <Star
            fill={(Math.round(rate) >= 4) ? true : undefined}><FontAwesomeIcon icon={faStar}/></Star>
            <Star
            fill={(Math.round(rate) >= 6) ? true : undefined}><FontAwesomeIcon icon={faStar}/></Star>
            <Star
            fill={(Math.round(rate) >= 8) ? true : undefined}><FontAwesomeIcon icon={faStar}/></Star>
            <Star
            fill={(Math.round(rate) >= 10) ? true : undefined}><FontAwesomeIcon icon={faStar}/></Star>
        </StarsArea>
    )
}
export default Estrelas;