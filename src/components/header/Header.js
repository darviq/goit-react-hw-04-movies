import {NavLink} from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import Ul from "./HeaderStyled";

const Header = () => {
    return (
        <Ul>
            {mainRoutes.map(({path, exact, name}) => (
                <li key={path}>
                    <NavLink to={path} exact={exact} className="link" activeClassName="active-link">
                        {name}
                    </NavLink>
                </li>
            ))}
        </Ul>
    );
};

export default Header;
