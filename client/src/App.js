import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/layout/Home";
import CreateAccount from "./components/create-account/CreateAccount";

import "./css/App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/create-account" component={CreateAccount} />
            </div>
        </Router>
    );
}

export default App;
