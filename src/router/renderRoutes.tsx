import React from 'react';
import { Route } from 'react-router';
import { RouteConfig } from 'react-router-config';


function renderRoute(routes: RouteConfig[]) {
    return routes.map((item, i) => {
        if ( item.routes && item.routes.length ) {
            return <Route key={ item.path && item.path.toString() }
                          path={ item.path && item.path.toString() }
                          caseSensitive={ item.exact }
                          element={ item.element && <item.element/> }>
                { renderRoutes(item.routes) }
            </Route>
        } else {
            return <Route
                key={ item.path && item.path.toString() }
                path={ item.path && item.path.toString() }
                caseSensitive={ item.exact }
                element={ item.element && <item.element/> }
            />
        }
    })
}

function renderRoutes(routes: RouteConfig[], extraProps = {}, switchProps = {}) {
    return routes ? (
            renderRoute(routes)
        ) :
        null;
}

export default renderRoutes;
