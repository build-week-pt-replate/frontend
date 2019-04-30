import React from "react";
import { connect } from "react-redux";
import { createVolunteerAccount } from "../../actions";

class VolunteerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
      zipcode: "",
      city: "",
      state: ""
    };
  }

  changeHandler = e => {
    this.setState({
      //Spreads previous state values, and changes current value depending on input from form
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  addAccount = e => {
    e.preventDefault();
    const volunteer = {
      ...this.state
    };
    console.log("did this work? addAccount");
    this.props.createVolunteerAccount(volunteer);
    //After submit, reset state
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
      zipcode: "",
      city: "",
      state: ""
    });
  };

  render() {
    return (
      <div className="sign-up-wrapper">
        <div className="sign-up-title">
          <h2>Volunteer Sign Up</h2>
          <p>Thanks for your interest!</p>
        </div>
        <form className="sign-up-form" onSubmit={this.addAccount}>
          <h2>Create Your Account</h2>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              onChange={this.changeHandler}
              value={this.state.firstName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              onChange={this.changeHandler}
              value={this.state.lastName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              onChange={this.changeHandler}
              value={this.state.city}
            />
          </div>
          <div className="input-field">
            <label htmlFor="zipcode">Zipcode</label>
            <input
              id="zipcode"
              type="text"
              name="zipcode"
              onChange={this.changeHandler}
              value={this.state.zipcode}
            />
          </div>
          <div className="input-field">
            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              name="state"
              onChange={this.changeHandler}
              value={this.state.state}
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              name="phone"
              onChange={this.changeHandler}
              value={this.state.phone}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={this.changeHandler}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
          </div>
          <div className="input-field">
            <label htmlFor="repeatPassword">Repeat password</label>
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

const mapStateToProps = ({ account, isLoading, error }) => ({
  account,
  isLoading,
  error
});

export default connect(
  mapStateToProps,
  { createVolunteerAccount }
)(VolunteerForm);
