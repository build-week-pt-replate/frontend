import React from "react";
import { connect } from 'react-redux';

import AddMUIcon from '../ButtonIcons/AddMUIcon';
import DashHeader from "../Header/DashHeader";
import DonationFormDialog from './DonationFormDialog';
import DonationRequests from './DonationRequests';

import {
  addDonation,
  fetchBusinessRequests,
  fetchBusinessData,
  deleteBusinessRequest
} from '../../actions/businessActions';

import './BusinessDash.css';

class BusinessDash extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      open: false,
      isSuccessful: false,
      locationName: '',
      locationStreet: '',
      locationCity: '',
      locationState: '',
      locationZip: '',
      requestDate: '',
      requestTime: '',
      foodDescription: '',
      comment: '',
      stepNumber: 1,
    }

    this.state = this.defaultState;
  }

  componentDidMount() {
    const businessId = localStorage.getItem('id');
    console.log('BusinessID:::', businessId);
    if (businessId) {
      this.props.fetchBusinessData(businessId);

    }

    console.log('ACCOUNT Name:', this.props.account)
    // fetch all the donation requests here
    this.props.fetchBusinessRequests();
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
      stepNumber: this.state.stepNumber + 1
    });
  };

  scheduleDonation = () => {
    const {
      open,
      stepNumber,
      isSuccessful,
      ...newDonation
    } = this.state;

    this.props
      .addDonation({businessId: this.props.account.id, ...newDonation})
      .then(() => {
        this.setState({
          ...this.defaultState,
          isSuccessful: true
        });
      })
      .catch(err => {
        console.error(err);

        this.setState({
          isSuccessful: false
        });
      });
  };

  deleteDonation = (requestId) => {
    this.props.deleteBusinessRequest(requestId);

  }

  render() {
    const { requests, account } = this.props;

    return (
      <div className="business-dash-container">
        <DashHeader history={this.props.history}/>
        {
          account ?

            (
              <div className="dash-content">
                <div className="titles-wrapper">
                  <div className="top-dash-wrapper">
                    <div className="business-title">
                      <h2>{account.companyName}'s Dashboard</h2>
                    </div>

                    <div className="add-btn-wrapper">
                      <h3 className="h-3-add-donation">Add Donation</h3>
                      <AddMUIcon
                        variant="outlined"
                        color="primary"
                        onClick={this.handleClickOpen}
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <h3>Pick Up Schedule</h3>
                  </div>
                </div>

                {
                  requests.length !== 0  ?
                    (
                      <DonationRequests
                        requests={requests}
                        deleteDonation={this.deleteDonation}
                      />
                    )

                    :

                    (
                      <div className=" ">
                        <h3>No Upcoming Pick up</h3>
                      </div>
                    )
                }
              </div>
            )

            :

            <h2>Loading...</h2>
        }

        <DonationFormDialog
          onClose={this.handleClose}
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

const mapStateToProps = ({ businessReducers }) => ({
  requests: businessReducers.requests,
  account: businessReducers.account,
  isLoading: businessReducers.isLoading,
  error: businessReducers.error,
});

export default (
  connect(
    mapStateToProps,
    {
      addDonation,
      fetchBusinessRequests,
      fetchBusinessData,
      deleteBusinessRequest
    }
  )(BusinessDash)
);

