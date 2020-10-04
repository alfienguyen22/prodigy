import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/layout/Home";
import CreateAccount from "./components/create-account/CreateAccount";
import store from "./store.js";

import "./css/App.css";

function App() {
    return (
        <Provider store={store}>
            {" "}
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/create-account"
                        component={CreateAccount}
                    />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
