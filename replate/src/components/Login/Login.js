import React from "react";
// import { connect } from "react-redux";
// import { login } from "../actions";

import "./Login.css";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    //Will be used to tell if user is logged in (null = no logine, not null = someones logged in )
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
  //     //After successful login, send user to protected website (FriendsList link)
  //     .then(() => this.props.history.push("/protected"));
  // };

  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <form className="login-form-wrapper">
            <h2 className="login-title">Login to Replate</h2>
            <div className="div-login-inputs">
              <div className="input-title-div">
                <p className="input-title-p">USER ID</p>
                <input
                  className="login-input"
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="input-title-div">
                <p className="input-title-p">PASSWORD</p>
                <input
                  className="login-input"
                  type="password"
                  name="password"
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

// const mapStateToProps = state => {
//   return {
//     isLogginIn: state.isLogginIn
//   };
// };

export default Login;
