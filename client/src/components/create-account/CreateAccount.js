import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";

import "../../css/CreateAccount.css";

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            password2: "",
            errors: {}, // TODO: Add error handling logic
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("TODO: Handle submitting form");
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="form-container" onSubmit={this.onSubmit}>
                <div className="container">
                    <h2>Đăng Ký</h2>
                    <p>Điền thông tin để đăng ký tài khoản.</p>
                    <hr />
                    <small className="d-block pb-3">* yêu cầu</small>
                    <TextFieldGroup
                        placeholder="* Email của bạn"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                        info="Email"
                    />
                    <TextFieldGroup
                        placeholder="* Chọn tên đăng nhập"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        error={errors.username}
                        info="Tên Đăng Nhập"
                    />
                    <TextFieldGroup
                        placeholder="* Mật khẩu"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                        info="Chọn Mật Khẩu"
                        type="password"
                    />
                    <TextFieldGroup
                        placeholder="* Xác nhận lại"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                        info="Xác nhận lại mật khẩu"
                        type="password"
                    />
                    <input
                        type="checkbox"
                        checked="checked"
                        name="remember-login"
                        id="remember-label"
                    />{" "}
                    Nhớ thông tin
                    <p>
                        Khi tạo tài khoản, bạn đồng ý với{" "}
                        <Link to="/terms-conditions" id="signup-tnc-url">
                            Điều khoản sử dụng
                        </Link>
                        .
                    </p>
                    <div className="clearfix">
                        <button type="button" className="signup-cancel-btn">
                            Huỷ
                        </button>
                        <button type="submit" className="signup-submit-btn">
                            Đăng Ký
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default CreateAccount;
