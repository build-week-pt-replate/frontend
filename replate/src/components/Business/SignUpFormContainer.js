import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBusinessAccount } from '../../actions';

import StepOneForm from './StepOneForm';
import StepTwoForm from './StepTwoForm';

class SignUpFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: '',
      officeName: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      officeEmail: '',
      stepNumber: 1,
    };
  }

  handleInputChange = event => {
    this.setState( {
      [event.target.name]: event.target.value,
    });
  };

  updateStepNumber = (event) => {
    event.preventDefault();

    this.setState({
      stepNumber: this.state.stepNumber + 1,
    })
  }

  addAccount = (event) => {
    event.preventDefault();
    const newAccount = {
      ...this.state,
    }

    this.props.createBusinessAccount(newAccount).then(() => {

      if (!this.props.error) {
        this.setState({
          company: '',
          phone: '',
          email: '',
          password: '',
          repeatPassword: '',
          companyName: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          companyEmail: '',
          stepNumber: 1,
        })
        // this.props.history.push("/business/:id/dashboard"); direct to dashboard
      }
    })
  }

  render() {
    return (
      <div className="signup-form-wrapper">
        <div className="sign-up-title">
          <h2>Donor Sign Up</h2>
          <p>Thanks for your interest!</p>
        </div>

        {
          this.state.stepNumber === 1 ?
            (<StepOneForm handleInputChange={this.handleInputChange}
                          formData={this.state}
                          updateStepNumber={this.updateStepNumber}
            />)

            :

            (
            <StepTwoForm handleInputChange={this.handleInputChange}
                         formData={this.state}
                         addAccount={this.addAccount}
            />)
        }

      </div>
    );
  }
}

const mapStateToProps = ({account, isLoading, error}) => ({
  account,
  isLoading,
  error,
});

export default (
  connect(
    mapStateToProps,
    { createBusinessAccount }
  )(SignUpFormContainer)
);
