import React, { Component } from "react";

import "../../css/homepage/HomeDashBoard.css";

export default class HomeDashBoard extends Component {
    render() {
        return (
            <div id="dashboard">
                <img src="https://cdn.discordapp.com/attachments/751718614641541140/764511280282730536/unknown.png" />
                <p7>
                    {" "}
                    Đọc để thay đổi bản thân.
                    <br />
                    <p8>Bắt đầu từ:</p8>
                    <br />
                    <button class="btn success">Lớp 1</button>
                    <button class="btn info">Lớp 2</button>
                    <button class="btn warning">Lớp 3</button>
                </p7>
            </div>
        );
    }
}
