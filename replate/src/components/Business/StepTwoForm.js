import React, { Component } from 'react';

class StepTwoForm extends Component {

  render() {
    const {
      companyName,
      street,
      city,
      state,
      zip,
      companyEmail,
    } = this.props.formData;

    return (
        <form onSubmit={this.props.addAccount}>
          <h2>Your business location</h2>

          <div>
            <label htmlFor="companyName">Office Name</label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={companyName}
              onChange={this.props.handleInputChange}
            />
          </div>

          <fieldset>
            <legend>Office address:</legend>
            <div>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                name="street"
                placeholder=" "
                value={street}
                onChange={this.props.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder=" "
                value={city}
                onChange={this.props.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                name="state"
                placeholder=" "
                value={state}
                onChange={this.props.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="zip">Zip code</label>
              <input
                id="zip"
                type="number"
                name="zip"
                placeholder=" "
                value={zip}
                onChange={this.props.handleInputChange}
              />
            </div>
          </fieldset>

          <div>
            <label htmlFor="companyEmail">Office E-mail (optional)</label>
            <input
              id="companyEmail"
              type="email"
              name="companyEmail"
              placeholder=" "
              value={companyEmail}
              onChange={this.props.handleInputChange}
            />
          </div>

          <button type="submit">
            Sign Up
          </button>
        </form>
    );
  }
}

export default StepTwoForm;
