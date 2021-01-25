import {NavLink, useRouteMatch} from "react-router-dom";
import movieDetailsRoutes from "../../../../routes/movieDetailsRoutes";
import styled from "styled-components";

const Div = styled.div`
    padding: 25px 35px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

const MovieDetailsNavigation = () => {
    const match = useRouteMatch();
    return (
        <>
            <Div>
                <p>Additional information</p>
                <ul>
                    {movieDetailsRoutes.map(({path, exact, name}) => (
                        <li key={path}>
                            <NavLink to={match.url + path} exact={exact} className="link" activeClassName="active-link">
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Div>
        </>
    );
};

export default MovieDetailsNavigation;
