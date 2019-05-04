import React from "react";
import DashHeader from "../Header/DashHeader";
import { connect } from "react-redux";
import {
  fetchVolunteerRequests,
  fetchVolunteerData,
  // acceptVolunteerRequest
} from '../../actions';

import RequestList from './RequestList'
import VolunteerRequestList from './VolunteerRequestList'

class VolunteerDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.account,
      updatedRequest: null
    }

  }

  componentDidMount() {
    //Fetch volunteer data
    this.props.fetchVolunteerData(localStorage.getItem('id'))
    // fetch all requests
    // this.props.fetchVolunteerRequests();
  }

  saveRequest = request => {
    this.setState({
      updatedRequest: {
        request
      }
    })
    console.log(this.state.updatedRequest)
  }

  // saveRequest = e => {
  //   //Changes the state/tracks the value of the friendPost whatever is being inputed on the form
  //   let values = e.target.value
  //   this.setState({
  //     updatedRequest: {
  //       ...this.state.updatedRequest,
  //       //Since on the inputs theres a "name" value it can be used as a key to change
  //       //All the inputs dynamically instead of creating a handler for all of em
  //       values
  //     }
  //   });
  //   console.log(this.state.updatedRequest)
  // };

  // acceptRequest = () => {
  //   let updatedRequest = {
  //     ...this.state.upd
  //   }



  //   acceptVolunteerRequest(updatedRequest)
  // }


  render() {
    return (
      <div className="dash-container">
      {this.props.account ? (
        <div>
          <DashHeader history={this.props.history} />
          <div className="volunteer-dash">
            <h2>{this.props.account.firstName}'s Dashboard</h2>
            {/* <h2>Volunteer Dashboard</h2> */}
            <h3>City:{this.props.account.city}</h3>
            <div className="requests-box">
              <h3>Available Requests</h3>
              <RequestList requests={this.props.requests} account={this.props.account} updatedRequest={this.updatedRequest} saveRequest={this.saveRequest} />
            </div>
            <div className="requests-box">
              <h3>Current Requests</h3>
              <VolunteerRequestList requests={this.props.requests} account={this.props.account} />
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

export default connect(mapStateToProps, { fetchVolunteerRequests, fetchVolunteerData })(VolunteerDash)
