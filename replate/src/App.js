import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";
import Volunteer from "./components/Volunteer/Volunteer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Replate</p>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Route path="/signup" component={SignUp} />
        <Route path="/signup/volunteer" component={Volunteer} />
      </header>
    </div>
  );
}

export default App;
