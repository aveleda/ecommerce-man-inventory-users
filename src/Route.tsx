import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Product from "./pages/Product";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/products' component={Product} />
            </Switch>
        </BrowserRouter>
    )
}