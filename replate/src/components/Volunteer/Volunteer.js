import React from "react";

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
      username: ""
    };
  }

  changeHandler = e => {
    this.setState({
      //Spreads previous state values, and changes current value depending on input from form
      ...this.state,
      [e.target.name]: e.target.value
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
            <label for="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              onChange={this.changeHandler}
              value={this.state.firstName}
            />
          </div>
          <div className="input-field">
            <label for="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              onChange={this.changeHandler}
              value={this.state.lastName}
            />
          </div>
          <div className="input-field">
            <label for="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              onChange={this.changeHandler}
              value={this.state.city}
            />
          </div>
          <div className="input-field">
            <label for="zipcode">Zipcode</label>
            <input
              id="zipcode"
              type="text"
              name="zipcode"
              onChange={this.changeHandler}
              value={this.state.zipcode}
            />
          </div>
          <div className="input-field">
            <label for="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              onChange={this.changeHandler}
              value={this.state.phone}
            />
          </div>
          <div className="input-field">
            <label for="email">E-mail</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={this.changeHandler}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <label for="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={this.changeHandler}
              value={this.state.username}
            />
          </div>
          <div className="input-field">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
          </div>
          <div className="input-field">
            <label for="repeatPassword">Repeat password</label>
            <input
              id="repeatPassword"
              type="password"
              name="repeatPassword"
              onChange={this.changeHandler}
              value={this.state.repeatPassword}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Volunteer;
