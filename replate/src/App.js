import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import PrivateROute from "./components/PrivateRoute";
import VolunteerDash from "./components/Volunteer/VolunteerDash";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Replate</p>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </header>
    </div>
  );
}

export default App;
