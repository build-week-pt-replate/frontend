import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { actionCreator goes here } from '../actions';

class CompanySignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  }

  handleInputChange = event => {
    this.setState( {
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="login-form-wrapper">
        <div className="sign-up-title">
          <h2>Company Sign Up</h2>
          <p>Thanks for your interest!</p>
        </div>

        <form onSubmit={() =>{}}>
          <h2>Create Your Account</h2>
          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Company Name"
            value={this.state.company}
            onChange={this.handleInputChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder=" "
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder=" "
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            placeholder=" "
            value={this.state.repeatPassword}
            onChange={this.handleInputChange}
          />

          <button type="submit">
            Continue
          </button>

        </form>
      </div>
    );
  }
}

export default CompanySignUp;
