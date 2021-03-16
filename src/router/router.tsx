
import { useRoutes } from "react-router-dom";
import { routes } from "./router.config";

const Router = () => {
    return useRoutes(routes);
}

export default Router;
