import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import "./Header.css";

const styles = {
  root: {
    flexGrow: 1
  }
};

function DashHeader(props) {
  const { classes } = props;

  const logout = async () => {
    await localStorage.clear()
    props.history.push("/login")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className="tool-bar">
          <Typography variant="h6" color="inherit">
            RePlate
          </Typography>
          {/* <Link className="login-button" to="/login"> */}
          <Button color="inherit" onClick={logout}>Logout</Button>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

DashHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashHeader);
