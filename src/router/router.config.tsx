import { PartialRouteObject, Navigate } from "react-router";
import { viewRoutes } from "@views/router.config";

export const routes: PartialRouteObject[] = [
    {
        path: '/', element: <Navigate to="/pages/home" />
    },
    ...viewRoutes
];
