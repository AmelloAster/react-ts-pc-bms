import React, { Suspense } from 'react';
import './App.less';
import {
    BrowserRouter,
} from "react-router-dom";
import Router from "./router/router";

function App() {
    return <BrowserRouter>
        <Router/>

    </BrowserRouter>

}

export default App;
