import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import queryString from "query-string";
import Form from "./FindMovieStyled";
import MovieList from "../movieList/MovieList";
import {findByQuery} from "../../../api/api";

const FindMovie = () => {
    const [state, setState] = useState({
        query: "",
        movies: null,
    });

    const history = useHistory();

    useEffect(() => {
        const findParams = queryString.parse(history.location.search);
        if (findParams.query) {
            findByQuery(findParams.query).then(data =>
                setState(prevState => ({
                    ...prevState,
                    movies: [...data],
                }))
            );
        }
    }, [history.location.search]);

    const inputHandler = e => {
        setState(prevState => ({
            ...prevState,
            query: e.target.value,
        }));
    };

    const submitHandler = e => {
        e.preventDefault();
        if (state.query) {
            history.push({
                pathname: history.location.pathname,
                search: `query=${state.query}`,
            });
        }
    };

    return (
        <>
            <Form onSubmit={submitHandler}>
                <input type="text" value={state.query} onChange={inputHandler} />
                <button type="submit">Search</button>
            </Form>
            {state.movies && <MovieList movies={state.movies} query={state.query || history.location.state.query} />}
        </>
    );
};

export default FindMovie;
