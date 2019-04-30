import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Paper from "@material-ui/core/Paper/";

import "./SignUp.css";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="signup-buttons">
          <Paper className="paper-component">
            <Link to="/signup/business" className="signup-box">
              <h2>I'm a business</h2>
              <p>I want to donate food</p>
            </Link>
          </Paper>

          <Paper className="paper-component">
            <Link to="/signup/volunteer" className="signup-box">
              <h2>I'm a volunteer</h2>
              <p>I want to receive donations</p>
            </Link>
          </Paper>

          <Paper className="paper-component">
            <Link to="/signup/nonprofit" className="signup-box">
              <h2>I'm a nonprofit</h2>
              <p>I want to receive donations</p>
            </Link>
          </Paper>
        </div>
      </div>
    );
  }
}

export default SignUp;
