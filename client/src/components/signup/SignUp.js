import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

import "../../css/signup/SignUp.css";

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
        const new_user_data = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
        };
        console.log("New user: ", new_user_data);
        this.props.registerUser(new_user_data, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="modal-content" onSubmit={this.onSubmit}>
                <div className="container">
                    <h2>Đăng Ký</h2>
                    <p>Điền thông tin để đăng ký tài khoản.</p>
                    <small className="d-block pb-3">* yêu cầu</small>
                    <TextFieldGroup
                        placeholder="* Họ và Tên của bạn"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                        info="Họ và Tên"
                    />
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
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
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
                        <button type="button" className="cancel-btn">
                            <Link to="/">Huỷ</Link>
                        </button>
                        <button type="submit" className="signup-btn">
                            Đăng Ký
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

CreateAccount.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

// Get state in component
const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
    withRouter(CreateAccount)
);
