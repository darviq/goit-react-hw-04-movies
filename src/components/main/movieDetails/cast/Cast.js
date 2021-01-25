import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {findMovieCast} from "../../../../api/api";

const Ul = styled.ul`
    padding: 25px;

    li {
        margin-top: 25px;
    }
`;

const Cast = () => {
    const [state, setState] = useState({
        cast: null,
    });

    const history = useHistory();

    useEffect(() => {
        const q = history.location.pathname.split("/").slice(-2, -1);
        findMovieCast(...q).then(data =>
            setState({
                cast: [...data],
            })
        );
    }, [history]);

    return (
        <>
            {state.cast && (
                <Ul>
                    {state.cast.map(actor => (
                        <li key={actor.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} width="100px" alt={actor.name} />
                            {actor.name}
                            <p>Character: {actor.character}</p>
                        </li>
                    ))}
                </Ul>
            )}
        </>
    );
};

export default Cast;
