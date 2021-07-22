import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Product from "./pages/Product";
import Home from "./pages/Home";
import Client from "./pages/Client";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/client' component={Client} />
                <Route path='/products' component={Product} />
            </Switch>
        </BrowserRouter>
    )
}