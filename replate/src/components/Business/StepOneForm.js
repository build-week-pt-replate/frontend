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
});

class StepOneForm extends Component {

  render() {
    const { classes } = this.props;

    const {
      companyName,
      phone,
      email,
      password,
      repeatPassword,
    } = this.props.formData;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <p> Step One </p>

          <Typography component="h1" variant="h5">
            <strong>Business Donor Sign-Up</strong>
          </Typography>
          <form className={classes.form}
                onSubmit={() => {
                  if (repeatPassword !== password) {
                    alert('Passwords must match!');

                  } else {
                    this.props.updateStepNumber();
                  }
                }}
          >

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="companyName">Company Name</InputLabel>
              <Input
                id="companyName"
                name="companyName"
                autoComplete="companyName"
                autoFocus
                value={companyName}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                autoComplete="phone"
                autoFocus
                value={phone}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={this.props.handleInputChange}
              />
            </FormControl>


            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={this.props.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="repeatPassword">
                Repeat Password
              </InputLabel>
              <Input
                name="repeatPassword"
                type="password"
                id="repeatPassword"
                value={repeatPassword}
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
              Continue
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(StepOneForm);
