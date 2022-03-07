import * as S from "./styles"
import { Link } from "react-router-dom";

const Button = () => {
    return <Link to="/contact"><S.Container>Contact</S.Container></Link>
}

export default Button;