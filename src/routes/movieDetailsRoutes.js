import {lazy} from "react";

const movieDetailsRoutes = [
    {
        name: "Cast",
        path: "/cast",
        exact: false,
        component: lazy(() => import("../components/main/movieDetails/cast/Cast" /* webpackChunkName: "Cast"*/)),
    },
    {
        name: "Reviews",
        path: "/reviews",
        exact: false,
        component: lazy(() => import("../components/main/movieDetails/reviews/Reviews" /* webpackChunkName: "Reviews"*/)),
    },
];

export default movieDetailsRoutes;
