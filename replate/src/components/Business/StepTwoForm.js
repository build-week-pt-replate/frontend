import React, { Component } from 'react';

class StepTwoForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      officeName,
      officeStreet,
      officeCity,
      officeState,
      officeZip,
      officeEmail,
    } = this.props.formData;

    return (
        <form onSubmit={this.handleSubmit}>
          <h2>Your business location</h2>

          <div>
            <label htmlFor="officeName">Office Name</label>
            <input
              id="officeName"
              type="text"
              name="officeName"
              placeholder="Company Name"
              value={officeName}
              onChange={this.props.handleInputChange}
            />
          </div>

          <fieldset>
            <legend>Office address:</legend>
            <div>
              <label htmlFor="officeStreet">Street</label>
              <input
                id="officeStreet"
                type="text"
                name="officeStreet"
                placeholder=" "
                value={officeStreet}
                onChange={this.props.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="officeCity">City</label>
              <input
                id="officeCity"
                type="text"
                name="officeCity"
                placeholder=" "
                value={officeCity}
                onChange={this.props.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="officeState">State</label>
              <input
                id="officeState"
                type="text"
                name="officeState"
                placeholder=" "
                value={officeState}
                onChange={this.props.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="officeZip">Zip code</label>
              <input
                id="officeZip"
                type="number"
                name="officeZip"
                placeholder=" "
                value={officeZip}
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
