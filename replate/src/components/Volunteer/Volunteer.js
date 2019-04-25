import React from "react";
import { Router } from "react-router-dom";

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newVolunteer: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        repeatPassword: "",
        username: ""
      }
    };
  }

  changeHandler = e => {
    this.setState({
      newVolunteer: {
        //Spreads previous state values, and changes current value depending on input from form
        ...this.state.newVolunteer,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="sign-up-wrapper">
        <div className="sign-up-title">
          <h2>Volunteer Sign Up</h2>
          <p>Thanks for your interest!</p>
        </div>
        <form className="sign-up-form">
          <h2>Create Your Account</h2>
          <div className="input-field">
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>City</p>
            <input
              type="text"
              name="city"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>Zipcode</p>
            <input
              type="text"
              name="zipcode"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>Phone</p>
            <input
              type="text"
              name="phone"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>E-mail</p>
            <input
              type="text"
              name="email"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>Username</p>
            <input
              type="text"
              name="username"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <div className="input-field">
            <p>Repeat password</p>
            <input
              type="password"
              name="repeatPassword"
              onChange={this.changeHandler}
              value={this.state.newVolunteer.name}
            />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    );
  }
}

export default Volunteer;
