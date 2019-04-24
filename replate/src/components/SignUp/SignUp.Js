import React from "react";
import { Link, Route } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Link to="/signup/business" className="signup-buttons">
          <div className="signup-box">
            <h2>I'm a business</h2>
            <p>I want to donate food</p>
          </div>
        </Link>
        <Link to="/signup/volunteer" className="signup-box">
          <h2>I'm a volunteer</h2>
          <p>I want to receive donations</p>
        </Link>
        <Link to="/signup/nonprofit" className="signup-box">
          <h2>I'm a nonprofit</h2>
          <p>I want to receive donations</p>
        </Link>
      </div>
    );
  }
}

export default SignUp;
