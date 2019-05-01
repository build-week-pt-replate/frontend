import React, { Component } from 'react';

class StepTwoForm extends Component {

  render() {
    const {
      officeName,
      street,
      city,
      state,
      zip,
      officeEmail,
    } = this.props.formData;

    return (
        <form onSubmit={this.props.addAccount}>
          <h2>Your business location</h2>

          <div>
            <label htmlFor="officeName">Office Name</label>
            <input
              id="officeName"
              type="text"
              name="officeName"
              placeholder="office Name"
              value={officeName}
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
            <label htmlFor="officeEmail">Office E-mail (optional)</label>
            <input
              id="officeEmail"
              type="email"
              name="officeEmail"
              placeholder=" "
              value={officeEmail}
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
