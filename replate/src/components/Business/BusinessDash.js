import React from "react";

import DonationFormDialog from './DonationFormDialog';
import Button from '@material-ui/core/Button';
import './BusinessDash.css';

class BusinessDash extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      open: false,
      locationName: '',
      date: '',
      time: '',
      foodDescription: '',
      comment: '',
      stepNumber: 1,
    }

    this.state = this.defaultState;
  }

  componentDidMount() {

  }

  handleInputChange = event => {
    this.setState( {
      [event.target.name]: event.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState(this.defaultState);
  };

  updateStepNumber = (event) => {
    event.preventDefault();

    this.setState({
      stepNumber: this.state.stepNumber + 1,
    })
  }

  render() {
    return (
      <div className="business-dash-container">
        <div className="business-title">
          <h2>Business Dashboard</h2>
        </div>

        <div className=" ">
          <h3>Pick Up Schedule</h3>
        </div>

        <div className=" ">
          <h3>Add Donation</h3>
          <Button variant="outlined"
                  color="primary"
                  onClick={this.handleClickOpen}
          >
            Add
          </Button>
        </div>

        <div className=" ">
          <h3>Next Week's Schedule</h3>
        </div>

        <div className=" ">
          <h3>Table Schedule Here</h3>
        </div>

        <DonationFormDialog onClose={this.handleClose}
                            isOpen={this.state.open}
                            handleInputChange={this.handleInputChange}
                            formDialogData={this.state}
                            updateStepNumber={this.updateStepNumber}

        />

      </div>
    );
  }
}

export default BusinessDash;
