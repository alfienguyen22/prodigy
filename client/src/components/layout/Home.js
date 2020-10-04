import React, { Component } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import WelcomeText from "./WelcomeText";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySideBar: false,
        };
        this.displayLoginSidebar = this.displayLoginSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    displayLoginSidebar() {
        console.log("Showing side bar");
        this.setState({
            displaySideBar: true,
        });
    }

    closeSidebar() {
        console.log("Closing side bar");
        this.setState({
            displaySideBar: false,
        });
    }

    render() {
        const { displaySideBar } = this.state;
        let sideBar,
            mainClass = "main";

        if (displaySideBar) {
            sideBar = (
                <Sidebar
                    closeSidebar={() => {
                        this.closeSidebar();
                    }}
                />
            );
            mainClass = "main main-with-sidebar";
        }

        return (
            <div id="main" className={mainClass}>
                {sideBar}
                <Navbar
                    displayLoginSidebar={() => {
                        this.displayLoginSidebar();
                    }}
                />
                <WelcomeText />
                <Footer />
            </div>
        );
    }
}

export default Home;
