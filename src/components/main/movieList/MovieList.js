import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    padding-left: 25px;
`;

const MovieList = ({movies, query = null}) => {
    const history = useHistory();

    return (
        <Ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link
                        to={{
                            pathname: `/movies/${movie.id}`,
                            state: {
                                from: history.location.pathname,
                                query: query,
                            },
                        }}
                    >
                        {movie.name || movie.title}
                    </Link>
                </li>
            ))}
        </Ul>
    );
};

export default MovieList;
