import React from "react";
import DashHeader from "../Header/DashHeader";
import { connect } from "react-redux";

class VolunteerDash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="dash-container">
        <DashHeader />
        <div className="volunteer-dash">
          <div className="requests-box">
            <h3>Available Requests</h3>
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
    requests: this.state.requests,
    volunteers: this.state.volunteers
  };
};

export default VolunteerDash;
