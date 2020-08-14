import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "../scss/index.scss";
import { getCurrentUser, noToken } from "../actions";
import "@material-ui/core";
import "@material-ui/icons";
import "@material-ui/styles";

import HomePage from "../components/HomePage";
import Header from "../components/Header";
import Login from "../components/Login";
import Signup from "../components/SignUp";

class App extends Component {
  state = {
    token: "",
  };

  componentDidMount() {
    var token = localStorage.getItem("authToken") || "";
    if (token) {
      this.setState({ token: token });
      this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}
const Home = () => (
  <>
    <Header />
    <HomePage />
  </>
);

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
  };
};

export default connect(mapStateToProps)(App);
