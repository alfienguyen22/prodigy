import React from "react";
import { Link } from "react-router-dom";

import "../../css/homepage/Navbar.css";

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="dropdown">
                <button className="dropbtn">
                    <i className="fas fa-atom"></i>
                    Bài Đọc
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Động Vật</a>
                    <a href="#">Địa Lí</a>
                    <a href="#">Khoa Học</a>
                    <a href="#">Lịch Sử Nước Mỹ</a>
                    <a href="#">Sức Khoẻ</a>
                    <a href="#">Truyện Cổ Tích</a>
                    <a href="#">Truyện Lịch Sử</a>
                    <a href="#">Cuộc Sống Thường Ngày</a>
                    <a href="#">Phiêu Lưu/Huyền Bí</a>
                    <a href="#">Hư Cấu</a>
                </div>
            </div>
            <input type="text" placeholder="Search.."></input>
            <div className="navbar-center">
                <a href="#">
                    TimeTurner <i className="far fa-hourglass"></i>
                </a>
            </div>
            <div className="navbar-right">
                <a href="#login">Đăng Nhập</a>
                <Link to="/signup"> Đăng Ký</Link>
            </div>
        </div>
    );
}

export default Navbar;
