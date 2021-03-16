import React from 'react';
import { PartialRouteObject } from "react-router";
import SampleLayout from "../layouts/sample/SampleLayout";
import { HomeRoutes } from "./home/router.config";
import Home from "./home/Home";


export const viewRoutes: PartialRouteObject[] = [
    {
        path: 'pages',
        element: <SampleLayout/>,
        children: [
            ...HomeRoutes
        ]
    }
];
