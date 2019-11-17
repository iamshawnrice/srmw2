import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import { Home } from "./pages/Home";

import "./style.scss";


function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
