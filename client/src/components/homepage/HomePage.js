import React, { Component } from "react";

import ArrowDown from "./ArrowDown";
import Footer from "./Footer";
import HomeDashBoard from "./HomeDashBoard";
import Navbar from "./Navbar";
import WelcomeText from "./WelcomeText";
import WhyTimeTurner from "./WhyTimeTurner";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main" className="main">
                <Navbar />
                <HomeDashBoard />
                <ArrowDown />
                <WhyTimeTurner />
                <ArrowDown />
                <WelcomeText />
                <Footer />
            </div>
        );
    }
}

export default Home;
