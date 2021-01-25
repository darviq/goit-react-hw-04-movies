import {useRouteMatch, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {findMovieDetails} from "../../../api/api";
import Div from "./MovieDetailsStyled";
import MovieDetailsNavigation from "./movieDetailsNavigation/MovieDetailsNavigation";

const MovieDetails = () => {
    const [state, setState] = useState({
        poster: "",
        title: "",
        userScore: "",
        overview: "",
        genres: "",
        from: "",
        query: "",
    });

    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        history.location.state &&
            setState(prevState => ({
                ...prevState,
                from: history.location.state.from,
                query: history.location.state.query,
            }));
    }, []);

    useEffect(() => {
        findMovieDetails(match.params.movieId).then(data => {
            setState(prevState => ({
                ...prevState,
                poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
                title: data.title,
                userScore: data.vote_average * 10 + "%",
                overview: data.overview,
                genres: data.genres.reduce((all, genre) => all + genre.name + " ", "").trim(),
            }));
        });
    }, [match.params.movieId]);

    const backHandler = () => {
        state.query ? history.push({pathname: state.from, search: `query=${state.query}`, state: {query: state.query}}) : history.push({pathname: state.from});
    };

    return (
        <>
            <Div>
                <button type="button" onClick={backHandler}>
                    &#x2190; Go back
                </button>
                <div className="movie-details">
                    <img src={state.poster} alt="poster" width="300px" />
                    <div>
                        <h2>{state.title}</h2>
                        <p>User Score: {state.userScore}</p>
                        <h3>Overview</h3>
                        <p>{state.overview}</p>
                        <h3>Genres</h3>
                        <p>{state.genres}</p>
                    </div>
                </div>
            </Div>
            <MovieDetailsNavigation />
        </>
    );
};

export default MovieDetails;
