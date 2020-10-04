import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span id="navbarLogin" className="active navbarSpan">
                    <i className="fa fa-fw fa-home"></i> Trang Chủ
                </span>
                <span id="navbarLogin" className="navbarSpan">
                    <i className="fa fa-fw fa-search"></i> Tìm Kiếm
                </span>
                <span id="navbarLogin" className="navbarSpan">
                    <i className="fa fa-fw fa-envelope"></i> Liên Hệ
                </span>
                <span
                    id="navbarLogin"
                    className="navbarSpan"
                    onClick={props.displayLoginSidebar}
                >
                    <i className="fa fa-fw fa-user"></i> Đăng Nhập
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
