import React, { Component } from 'react';

class StepOneForm extends Component {

  render() {
    const {
      companyName,
      phone,
      email,
      password,
      repeatPassword,
    } = this.props.formData;

    return (
        <form onSubmit={this.props.updateStepNumber}>
          <h2>Create Your Account</h2>
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            placeholder="company name"
            value={companyName}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder=" "
            value={phone}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            value={email}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder=" "
            value={password}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            placeholder=" "
            value={repeatPassword}
            onChange={this.props.handleInputChange}
          />

          <button type="submit">
            Continue
          </button>
        </form>
    );
  }
}

export default StepOneForm;
