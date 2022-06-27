import { useState } from "react"
import { Selecionar, SelectBox, Icon, OptionBox, Escolhido} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Select = ({selecionado, setSelecionado}) => {
    const [opened, setOpened] = useState(false);

    return(
        <Selecionar onClick={() => setOpened(!opened)} onMouseLeave={() => setOpened(false)}>
            <SelectBox opened={opened}>
                <Escolhido>
                    {selecionado ? (opened ? "Filtrar por" : selecionado) : "Filtrar por"}
                </Escolhido>
                
                <OptionBox active={opened} onClick={()=>(setSelecionado("Lançamento"))}>
                    Lançamento
                </OptionBox>
                <OptionBox active={opened} onClick={()=>(setSelecionado("A-Z"))}>
                    A-Z
                </OptionBox>
            </SelectBox>
            
            <Icon opened={opened}>
                <FontAwesomeIcon icon={faChevronDown}/>
            </Icon>
        </Selecionar>
    )
}
export default Select;