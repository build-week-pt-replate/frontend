import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
// import PrivateRoute from "./components/PrivateRoute";
// import VolunteerDash from "./components/Volunteer/VolunteerDash";
import VolunteerForm from "./components/Volunteer/VolunteerForm";
import SignUpFormContainer from "./components/Business/SignUpFormContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Replate</p>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

        <Route exact path="/signup/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/signup/volunteer" component={VolunteerForm} />
        <Route path="/signup/business" component={SignUpFormContainer} />
        {/* <Route path='/'/> */}
      </header>
    </div>
  );
}

export default App;
