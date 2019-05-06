import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBusinessAccount } from '../../actions/businessActions';
import Header from "../Header/Header";

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
    const {
      repeatPassword,
      stepNumber,
      ...newAccount
    } = this.state;

    if (this.state.password === repeatPassword) {
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
          this.props.history.push("/business/dashboard");
        }
      })
    } else {
      this.setState({
        password: '',
        repeatPassword: '',
        stepNumber: 1
      });
      alert('Passwords did not match');
    }
  }

  render() {
    return (
      <div className="signup-form-wrapper">
        <Header />
        <div className="sign-up-title">
          <h3>Thanks for your interest!</h3>
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
