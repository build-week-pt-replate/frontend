import React from "react";
import { Link, Route } from "react-router-dom";

import VolunteerForm from "../Volunteer/VolunteerForm";
import SignUpFormContainer from "../Business/SignUpFormContainer";

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup-buttons">
        <Link to="/signup/business" className="signup-box">
          <h2>I'm a business</h2>
          <p>I want to donate food</p>
        </Link>
        <Link to="/signup/volunteer" className="signup-box">
          <h2>I'm a volunteer</h2>
          <p>I want to receive donations</p>
        </Link>
        <Link to="/signup/nonprofit" className="signup-box">
          <h2>I'm a nonprofit</h2>
          <p>I want to receive donations</p>
        </Link>
        <div />
        <Route path="/signup/volunteer" component={VolunteerForm} />
        <Route path="/signup/business" component={SignUpFormContainer} />
      </div>
    );
  }
}

export default SignUp;
