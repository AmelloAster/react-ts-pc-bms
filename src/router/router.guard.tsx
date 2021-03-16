import React from 'react';
import { Route, Navigate } from 'react-router';

function RouterGuard() {
    let location = window.location;
    let { pathname } = location;
    const isLogin = false;

    if ( pathname !== 'auth/login' && !isLogin ) {
        return Navigate({ to: 'auth/login' })
    }
    return null;

}

export default RouterGuard;
