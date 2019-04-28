import React from "react";
// import { connect } from "react-redux";
// import { login } from "../actions";

import "./Login.css";

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
      <div className="login-container">
        <div className="login-wrapper">
          <form className="login-form-wrapper" onSubmit={this.handleLogin}>
            <h2 className="login-title">Login to Replate</h2>
            <div className="div-login-inputs">
              <div className="input-title-div">
                <label className="input-title-p" htmlFor="username">
                  USERNAME
                </label>
                <input
                  id="username"
                  className="login-input"
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="input-title-div">
                <label className="input-title-p" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.credentials.password}
                  onChange={this.changeHandler}
                />

                <button className="login-button">Log In</button>
              </div>
            </div>
          </form>
        </div>
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
