import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
    return <S.MenuList>
        <S.ItemList>
            <Link to="/">Home</Link>{" "}
        </S.ItemList>
        <S.ItemList>
            <Link to="/aboutme">About me</Link>
        </S.ItemList>
        <S.ItemList>
        <Link to="/services">Services</Link>
        </S.ItemList>
    </S.MenuList>
}

export default Menu;