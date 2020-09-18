import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Header from "./components/Header-component";
import Footer from "./components/Footer-component";

import Home from "./pages/Home";
import Checkpoint from "./pages/Checkpoint";

export default function Routes() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/checkpoint">
                    <Checkpoint />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
