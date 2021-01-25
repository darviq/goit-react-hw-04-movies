import {lazy} from "react";

const mainRoutes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: lazy(() => import("../pages/HomePage" /* webpackChunkName: "HomePage"*/)),
    },
    {
        name: "Movies",
        path: "/movies",
        exact: false,
        component: lazy(() => import("../pages/MoviesPage" /* webpackChunkName: "MoviesPage"*/)),
    },
];

export default mainRoutes;
