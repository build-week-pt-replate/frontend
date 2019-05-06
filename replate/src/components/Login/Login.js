import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions";
import LoginForm from "./LoginForm";
import Header from "../Header/Header";
// import Button from "@material-ui/core/Button";

class Login extends React.Component {
  state = {
    credentials: {
      email: "",
      password: "",
      //To determine if business account or volunteer (if false && credentials are valid login as volunteer)
      businessAccount: false
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        //Since I added a value tag on inputs, I can use it to track the value
        //A name tag and a value tag is use to create the key:value pair
        [e.target.name]: e.target.value
      }
    });
    // console.log(this.state.businessAccount);
  };

  changeHandlerSwitch = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        businessAccount: !this.state.credentials.businessAccount
      }
    });
    console.log(e.target.value);
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      //When credentials inputted into form and submitted, run the login action creator
      .login(this.state.credentials)
      //After successful login, send user to protected website
      .then(() =>
        this.state.credentials.businessAccount
          ? this.props.history.push("/business/dashboard")
          : this.props.history.push("/volunteer/dashboard")
      );
  };

  render() {
    return (
      <div>
        <Header />
        <LoginForm
          handleLogin={this.handleLogin}
          changeHandler={this.changeHandler}
          businessAccount={this.state.credentials.businessAccount}
          changeHandlerSwitch={this.changeHandlerSwitch}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading }) => {
  return {
    isLoading
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
