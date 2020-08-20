import React from "react";
import Logo from "../../public/images/trello-logo-blue.svg";
import { NavLink } from "react-router-dom";
import { connect } from "mongoose";
import { userLogin } from "../actions";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    return this.props.dispatch(userLogin(this.state, this.props.history));
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="signUp-form">
        <section>
          <div className="signUp-logo">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="form-wrapper">
            <div className="form-box">
              <h2>Log in to Trello</h2>
              <input
                className="signUp-form-input login-form-input"
                type="email"
                placeholder="Enter email"
                value={email}
                name="email"
                onChange={(e) => this.handleInput(e)}
              />
              <input
                className="signUp-form-input login-form-input"
                type="password"
                placeholder="Enter password"
                value={password}
                name="password"
                onChange={(e) => this.handleInput(e)}
              />
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="form-btn login-btn"
              >
                Log In
              </button>
              <div className="or">
                <span>OR</span>
              </div>
              <button type="submit" className="form-btn auth-btn">
                Login with Google
              </button>
              <button type="submit" className="form-btn auth-btn">
                Continue with Microsoft
              </button>
              <button type="submit" className="form-btn auth-btn">
                Continue with Apple
              </button>
              <hr />
              <div className="login-link">
                <NavLink className="signUp-link" to="/signUp">
                  Can't log in? Sign up for an account
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(Login);
