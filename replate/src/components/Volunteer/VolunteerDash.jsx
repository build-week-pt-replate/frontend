import React from "react";
import DashHeader from "../Header/DashHeader";
import { connect } from "react-redux";
import {
  fetchVolunteerRequests,
  fetchVolunteerData
} from '../../actions';

import RequestList from './RequestList'
import VolunteerRequestList from './VolunteerRequestList'

class VolunteerDash extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //Fetch volunteer data 
    // this.props.fetchVolunteerData(this.props.account.id)
    // fetch all requests
    console.log(this.props.account)
    // this.props.fetchVolunteerRequests();
  }

  render() {
    return (
      <div className="dash-container">
        <DashHeader />
        <div className="volunteer-dash">
          <h2>{this.props.account.firstName}'s Dashboard</h2>
          {/* <h2>Volunteer Dashboard</h2> */}
          <h3>City:{this.props.account.city}</h3>
          <div className="requests-box">
            <h3>Available Requests</h3>
            <RequestList requests={this.props.requests} account={this.props.account} />
          </div>
          <div className="requests-box">
            <h3>Current Requests</h3>
            <VolunteerRequestList requests={this.props.requests} account={this.props.account} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    requests: state.volunteerReducers.requests,
    account: state.volunteerReducers.account,
    isLoading: state.volunteerReducers.isLoading,
    fetchingData: state.volunteerReducers.fetchingData,
    error: state.volunteerReducers.error
  };
};

export default connect(mapStateToProps, { fetchVolunteerRequests, fetchVolunteerData })(VolunteerDash)
