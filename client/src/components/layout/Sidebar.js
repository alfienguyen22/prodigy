import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <span className="closebtn" onClick={this.props.closeSidebar}>
                    &times;
                </span>

                <form action="/action_page.php" method="post">
                    <h2>Đăng Nhập</h2>
                    <div className="container">
                        <label htmlFor="uname">
                            <b>Tên Đăng Nhập</b>
                        </label>
                        <input
                            type="text"
                            name="uname"
                            placeholder="Nhập tên"
                            required
                        />
                        <br />
                        <label htmlFor="password">
                            <b>Mật Khẩu</b>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            required
                        />
                        <button id="loginButton" type="submit">
                            Đăng Nhập
                        </button>
                        <label>
                            <input
                                name="remember"
                                type="checkbox"
                                checked="checked"
                            />{" "}
                            Remember me
                        </label>
                    </div>

                    <div className="container">
                        <Link to="/forgot-password" className="sidenav-links">
                            Quên Mật Khẩu?
                        </Link>
                        <br />
                        <span className=""></span>
                        <Link to="/create-account" className="sidenav-links">
                            Đăng Ký Ngay!
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Navbar;
