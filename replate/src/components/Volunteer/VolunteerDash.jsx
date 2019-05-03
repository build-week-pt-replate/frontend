import React from "react";
import DashHeader from "../Header/DashHeader";
import { connect } from "react-redux";
import {
  fetchVolunteerRequests,
  fetchVolunteerData
} from '../../actions';

import RequestList from './RequestList'

class VolunteerDash extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //Fetch volunteer data 
    this.props.fetchVolunteerData(this.props.account.id)
    // fetch all requests
    console.log(this.props.account)
    // this.props.fetchVolunteerRequests();
  }

  render() {
    return (
      <div className="dash-container">
        <DashHeader />
        <div className="volunteer-dash">
          {/* <h2>{this.props.account.name}'s Dashboard</h2> */}
          <h2>Volunteer Dashboard</h2>
          <div className="requests-box">
            <h3>Available Requests</h3>
            <RequestList requests={this.props.requests} account={this.props.account} />
          </div>
          <div className="requests-box">
            <h3>Current Requests</h3>
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
    fetchingData: state.volunteerReducers.fetchingData,
    error: state.volunteerReducers.error
  };
};

export default connect(mapStateToProps, { fetchVolunteerRequests, fetchVolunteerData })(VolunteerDash)
