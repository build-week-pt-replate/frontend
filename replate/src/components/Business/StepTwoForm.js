import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});;

class StepTwoForm extends Component {

  render() {
    const { classes } = this.props;

    const {
      officeName,
      street,
      city,
      state,
      zip,
      officeEmail,
    } = this.props.formData;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <p> Step Two </p>

          <Typography component="h1" variant="h5">
            <strong>Your business location</strong>
          </Typography>

          <form className={classes.form} onSubmit={this.props.addAccount}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="officeName">Office Name</InputLabel>
              <Input
                id="officeName"
                name="officeName"
                autoComplete="officeName"
                autoFocus
                value={officeName}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="street">Street</InputLabel>
              <Input
                id="street"
                name="street"
                autoComplete="street"
                value={street}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="city">City</InputLabel>
              <Input
                id="city"
                name="city"
                autoComplete="city"
                value={city}
                onChange={this.props.handleInputChange}
              />
            </FormControl>


            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="state">State</InputLabel>
              <Input
                name="state"
                id="state"
                autoComplete="state"
                value={state}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="zip">Zip code</InputLabel>
              <Input
                name="zip"
                id="zip"
                type="number"
                autoComplete="zip"
                value={zip}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="officeEmail">Office E-mail (optional)</InputLabel>
              <Input
                name="officeEmail"
                id="officeEmail"
                type="email"
                autoComplete="officeEmail"
                value={officeEmail}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(StepTwoForm);
