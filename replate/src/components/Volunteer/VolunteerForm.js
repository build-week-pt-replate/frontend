import React from "react";
import { connect } from "react-redux";
import { createVolunteerAccount } from "../../actions";
import Header from "../Header/Header";

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
      zip: "",
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      zip: this.state.zip,
      city: this.state.city,
      state: this.state.state
    };
    console.log("did this work? addAccount");
    //Checks to see if password and repeatPassword matches
    if (this.state.password === this.state.repeatPassword) {
      this.props.createVolunteerAccount(volunteer);
      //After submit, reset state
      this.setState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        repeatPassword: "",
        zip: "",
        city: "",
        state: ""
      });
    } else {
      this.setState({
        password: "",
        repeatPassword: ""
      });
      alert("Passwords did not match.");
    }
  };

  render() {
    return (
      <div className="volunteer-form-container">
        <Header />
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
              <label htmlFor="zip">Zipcode</label>
              <input
                id="zip"
                type="text"
                name="zip"
                onChange={this.changeHandler}
                value={this.state.zip}
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
