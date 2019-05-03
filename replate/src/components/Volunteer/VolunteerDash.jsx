import React from "react";
import DashHeader from "../Header/DashHeader";
import { connect } from "react-redux";
import { fetchVolunteerRequests } from '../../actions/index.js'
import RequestList from './RequestList'

class VolunteerDash extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // fetch all requests
    this.props.fetchVolunteerRequests();
  }

  render() {
    return (
      <div className="dash-container">
        <DashHeader />
        <div className="volunteer-dash">
          <h2>{this.props.account.name}'s Dashboard</h2>
          <div className="requests-box">
            <h3>Available Requests</h3>
            <RequestList requests={this.props.requests} />
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
    requests: state.requests,
    account: state.volunteers,
    fetchingData: state.fetchingData,
    error: state.error
  };
};

export default (connect(mapStateToProps, fetchVolunteerRequests)(VolunteerDash))
