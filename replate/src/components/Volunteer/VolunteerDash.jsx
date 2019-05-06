import React from "react";
import DashHeader from "../Header/DashHeader";
import { connect } from "react-redux";
import {
  fetchVolunteerRequests,
  fetchVolunteerData,
  acceptVolunteerRequest,
  completeVolunteerRequest,
  removeVolunteerRequest
} from "../../actions";

import "./VolunteerDash.css";

import RequestList from "./RequestList";
import VolunteerRequestList from "./VolunteerRequestList";

class VolunteerDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.account,
      updatedRequest: null
    };
  }

  componentDidMount() {
    //Fetch volunteer data
    this.props.fetchVolunteerData(localStorage.getItem("id"));
    // fetch all requests
    this.props.fetchVolunteerRequests();
  }

  acceptRequest = request => {
    console.log("Before id is changed", request);
    let newRequest = request;
    newRequest.volunteerId = Number(localStorage.getItem("id"));
    // this.setState(
    //   {
    //     updatedRequest: newRequest
    //   },
    //   this.resetRequestState()
    // );
    console.log("After first setState", newRequest);
    this.props.acceptVolunteerRequest(newRequest);
  };

  // resetRequestState = () => {
  //   this.setState({
  //     updatedRequest: null
  //   });
  // };

  removeRequest = request => {
    console.log(request);
    let newRequest = request;
    // console.log(newRequest);
    newRequest.volunteerId = null;
    // this.setState({
    //   updatedRequest: newRequest
    // });
    console.log("After first setState", newRequest);
    this.props.removeVolunteerRequest(newRequest);
  };

  completeRequest = request => {
    console.log(request);
    // this.props.completeVolunteerRequest(request.id);
  };

  render() {
    return (
      <div className="dash-container">
        {this.props.account ? (
          <div>
            <DashHeader history={this.props.history} />
            <div className="volunteer-dash">
              <h2 className="dashboard-titles">
                {this.props.account.firstName}'s Dashboard
              </h2>
              {/* <h2>Volunteer Dashboard</h2> */}
              <h3 className="dashboard-titles">
                City: {this.props.account.city}
              </h3>
              <div className="requests-box">
                <h3 className="dashboard-titles">Available Requests</h3>
                <RequestList
                  requests={this.props.requests}
                  account={this.props.account}
                  acceptRequest={this.acceptRequest}
                  removeRequest={this.removeRequest}
                />
              </div>
              <div className="requests-box">
                <h3 className="dashboard-titles">Current Requests</h3>
                <VolunteerRequestList
                  requests={this.props.requests}
                  account={this.props.account}
                  removeRequest={this.removeRequest}
                  completeRequest={this.completeRequest}
                />
              </div>
            </div>
          </div>
        ) : (
            <h3>Loading</h3>
          )}
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

export default connect(
  mapStateToProps,
  {
    fetchVolunteerRequests,
    fetchVolunteerData,
    acceptVolunteerRequest,
    completeVolunteerRequest,
    removeVolunteerRequest
  }
)(VolunteerDash);
