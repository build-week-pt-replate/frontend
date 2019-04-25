import React, { Component } from 'react';

class StepTwoForm extends Component {

  render() {
    const {
      officeName,
      officeAddress,
      officeEmail,
    } = this.props.formData;

    return (
        <form onSubmit={() =>{/* action here */}}>
          <h2>Your business location</h2>
          <label htmlFor="officeName">Office Name</label>
          <input
            id="officeName"
            type="text"
            name="officeName"
            placeholder="Company Name"
            value={officeName}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="officeAddress">Office address</label>
          <input
            id="officeAddress"
            type="tel"
            name="officeAddress"
            placeholder=" "
            value={officeAddress}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="officeEmail">Office E-mail (optional)</label>
          <input
            id="officeEmail"
            type="email"
            name="officeEmail"
            placeholder=" "
            value={officeEmail}
            onChange={this.props.handleInputChange}
          />

          <button type="submit">
            Sign Up
          </button>
        </form>
    );
  }
}

export default StepTwoForm;
