import React, {Suspense} from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import MovieDetails from "../components/main/movieDetails/MovieDetails";
import movieDetailsRoutes from "../routes/movieDetailsRoutes";

const MovieDetailsPage = () => {
    const route = useRouteMatch();

    return (
        <>
            <MovieDetails />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Switch>
                    {movieDetailsRoutes.map(({path, exact, component: CurrentComponent}) => (
                        <Route path={route.url + path} exact={exact} key={path} component={CurrentComponent} />
                    ))}
                </Switch>
            </Suspense>
        </>
    );
};

export default MovieDetailsPage;
