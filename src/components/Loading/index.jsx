import { Load, Pisca } from "./styled";
import Logo from "../Logo";
const Loading = () => {
    return(
        <Load>
            <Pisca>
                <Logo Size={70}/>
            </Pisca>
        </Load>
    )
}
export default Loading;