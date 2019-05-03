import React from "react";
import { connect } from 'react-redux';

import DashHeader from "../Header/DashHeader";
import DonationFormDialog from './DonationFormDialog';
import DonationRequests from './DonationRequests';
import Button from '@material-ui/core/Button';
import {
  addDonation,
  fetchBusinessRequests
} from '../../actions';

import './BusinessDash.css';

class BusinessDash extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      open: false,
      successful: false,
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
    // fetch all the donation requests here
    this.props.fetchBusinessRequests();
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

  scheduleDonation = () => {
    const {
      open,
      stepNumber,
      isSuccessful,
      ...newDonation
    } = this.state;

    this.props.addDonation(newDonation).then(()=>{

      this.setState({
        isSuccessful: true
      })

    }).catch(err => {
      console.error(err);

      this.setState({
        isSuccessful: false
      })
    })
  }

  render() {
    const {requests} = this.props;

    return (
      <div className="business-dash-container">
        <DashHeader />
        <div className="dash-content">
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

          {
              requests.length !== 0  ?
            (
              <DonationRequests requests={requests}/>
            )

            :

            (
              <div className=" ">
                <h3>No Upcoming Pick up</h3>
              </div>
            )
          }
        </div>

        <DonationFormDialog onClose={this.handleClose}
                            isOpen={this.state.open}
                            handleInputChange={this.handleInputChange}
                            formDialogData={this.state}
                            updateStepNumber={this.updateStepNumber}
                            scheduleDonation={this.scheduleDonation}

        />

      </div>
    );
  }
}

const mapStateToProps = ({requests, account, isLoading, error}) => ({
  requests,
  account,
  isLoading,
  error,
});

export default (
  connect(
    mapStateToProps,
    {
      addDonation,
      fetchBusinessRequests
    }
  )(BusinessDash)
);

