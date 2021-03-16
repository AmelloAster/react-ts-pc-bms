import React from 'react';
import { PartialRouteObject } from "react-router";
import Home from "./Home";


export const HomeRoutes: PartialRouteObject[] = [
    {
        path: 'home',
        element: <Home/>
    }
];
