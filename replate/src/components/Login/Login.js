import React from "react";
// import { connect } from "react-redux";
// import { login } from "../actions";
import LoginForm from "./LoginForm";
import Header from "../Header/Header";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      //To determine if business account or volunteer (if false && credentials are valid login as volunteer)
      businessAccount: false
    },
    //Will be used to tell if user is logged in (null = no login, not null = someones logged in )
    user: null
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
  };

  // handleLogin = e => {
  //   e.preventDefault();
  //   this.props
  //     //When credentials inputted into form and submitted, run the login action creator
  //     .login(this.state.credentials)
  //     //After successful login, send user to protected website
  //     .then(() => this.props.history.push("/protected"));
  // };

  render() {
    return (
      <div>
        <Header />
        <LoginForm
          handleLogin={this.handleLogin}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default Login;
