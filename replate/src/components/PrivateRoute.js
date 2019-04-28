import React from "react";
import { Route, Redirect } from "react-router-dom";

// Requires:
// 1. It has the API as <Route />
// 2. It renders a <Route /> and passes all the props through to Route
// 3. it check is the user is authenticated, if they are, it renders the
// "component" prop if not, it redirects to /login.

const PrivateRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      //The rest of the props
      {...theRest}
      render={() => {
        //Check if token is there, if true return the component
        //In this case the DashBoard component
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          //If the token isn't there redirects you to login page
          console.log("Wrong credentials, redirecting you to login");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
