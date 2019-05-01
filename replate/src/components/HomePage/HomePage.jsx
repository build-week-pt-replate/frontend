import React from "react";
import Paper from "@material-ui/core/Paper/";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-buttons">
        <Paper className="paper-component">
          <Link to="/login" className="signup-box">
            <h2>Already have an account? Login!</h2>
          </Link>
        </Paper>

        <Paper className="paper-component">
          <Link to="/signup" className="signup-box">
            <h2>Need to create an account? Signup!</h2>
          </Link>
        </Paper>
      </div>
    </div>
  );
}

export default HomePage;
