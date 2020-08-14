import React from "react";
import logo from "../../public/images/trello-logo-white.svg";
import { Link, NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="flex-sb header-container">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" height="35" />
            </NavLink>
          </div>
          <div>
            <NavLink className="text-white btn-sm" to="/login">
              Log In
            </NavLink>
            <NavLink className="bg-white btn-sm text-blue" to="/signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
