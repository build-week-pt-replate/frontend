import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
// import PrivateRoute from "./components/PrivateRoute";
import VolunteerDash from "./components/Volunteer/VolunteerDash";
import BusinessDash from "./components/Business/BusinessDash";
import VolunteerForm from "./components/Volunteer/VolunteerForm";
import SignUpFormContainer from "./components/Business/SignUpFormContainer";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup/" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/signup/volunteer" component={VolunteerForm} />
      <Route path="/signup/business" component={SignUpFormContainer} />
      <Route path="/business/dashboard" component={BusinessDash} />
      <Route path="/volunteer/dashboard" component={VolunteerDash} />
    </div>
  );
}

export default App;
