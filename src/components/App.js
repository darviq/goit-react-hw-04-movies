import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./header/Header";
import mainRoutes from "../routes/mainRoutes";

const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Switch>
                    <Route path="/movies/:movieId" component={lazy(() => import("../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/))} />
                    {mainRoutes.map(({path, exact, component: CurrentComponent}) => (
                        <Route path={path} exact={exact} key={path} component={CurrentComponent} />
                    ))}
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        </>
    );
};

export default App;
