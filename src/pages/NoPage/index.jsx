import { NothingHere } from "./styled"
import Logo from "../../components/Logo"
export default function NoPage(){
    document.title = "Portal Marvel | Nada aqui"
    return(
        <NothingHere>
            <p>
                
                Não tem nada aqui, volte para
            </p>
            <Logo Size={50}/>
            
        </NothingHere>
    )
}