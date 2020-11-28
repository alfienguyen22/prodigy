import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/homepage/HomePage";
import SignUp from "./components/signup/SignUp";
import store from "./store.js";

import "./css/App.css";

function App() {
    return (
        <Provider store={store}>
            {" "}
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
