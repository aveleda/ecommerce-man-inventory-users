import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Client from "./pages/Client";
import Product from "./pages/Product";
import ViewProduct from "./pages/ViewProduct";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/client' component={Client} />
                <Route path='/product' component={Product} />
                <Route path='/viewprod' component={ViewProduct} />
            </Switch>
        </BrowserRouter>
    )
}