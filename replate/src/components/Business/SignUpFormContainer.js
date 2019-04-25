import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { actionCreator goes here } from '../actions';

import StepOneForm from './StepOneForm';
import StepTwoForm from './StepTwoForm';

class SignUpFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: '',
      officeName: '',
      officeAddress: '',
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
            />)
        }

      </div>
    );
  }
}

export default SignUpFormContainer;
