import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {findTrending} from "../../../api/api";
import MovieList from "../movieList/MovieList";

const H1 = styled.h1`
    margin: 25px 0;
`;

const Trending = () => {
    const [state, setState] = useState({
        trending: null,
    });

    useEffect(() => {
        findTrending().then(data => {
            setState({trending: [...data]});
        });
    }, []);

    return (
        <>
            <H1>Trending today</H1>
            {state.trending && <MovieList movies={state.trending} />}
        </>
    );
};

export default Trending;
