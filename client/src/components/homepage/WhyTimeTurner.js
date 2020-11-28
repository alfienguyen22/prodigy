import React, { Component } from "react";

import "../../css/homepage/WhyTimeTurner.css";

class WhyTimeTurner extends Component {
    render() {
        return (
            <div>
                <div id="why-us">
                    <h3>Why TimeTurner?</h3>
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <p>
                                    <i className="far fa-clock fa-3x"></i>
                                </p>
                                <div className="container">
                                    <p6>Tiết kiệm thời gian</p6>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <p>
                                    <i className="fas fa-book-reader fa-3x"></i>
                                </p>
                                <div className="container">
                                    <p6>Rèn luyện kỹ năng đọc hiểu cho bé</p6>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <p>
                                    <i className="fas fa-shapes fa-3x"></i>
                                </p>
                                <div className="container">
                                    <p6>Bài đọc phong phú</p6>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <p>
                                    <i className="fab fa-envira fa-3x"></i>
                                </p>
                                <div className="container">
                                    <p6>Thân thiện với người dùng</p6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyTimeTurner;
