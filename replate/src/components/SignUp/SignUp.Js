import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup-buttons">
        <div className="signup-box">
          <h2>I'm a business</h2>
          <p>I want to donate food</p>
        </div>{" "}
        <div className="signup-box">
          <h2>I'm a volunteer</h2>
          <p>I want to receive donations</p>
        </div>
        <div className="signup-box">
          <h2>I'm a nonprofit</h2>
          <p>I want to receive donations</p>
        </div>
      </div>
    );
  }
}

export default SignUp;
