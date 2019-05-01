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
    requests: this.state.requests
  };
};

export default VolunteerDash;

//Example Requests data
[
  {
    id: 1,
    requestDate: "2019-04-24",
    requestTime: "11:00:00",
    locationName: "Hunger First",
    locationStreet: "111 Kenwood Rd",
    locationCity: "Knoxville",
    locationState: "TN",
    locationZip: "37902",
    foodDescription: "Various canned food items",
    comment: "Can be picked up anytime before 2pm",
    businessId: 1,
    volunteerId: null,
    created_at: "2019-04-30 03:26:56",
    updated_at: "2019-04-30 03:26:56"
  },
  {
    id: 2,
    requestDate: "2019-04-27",
    requestTime: "10:30:00",
    locationName: "Hope Shelter",
    locationStreet: "110 Carolina Street",
    locationCity: "Knoxville",
    locationState: "TN",
    locationZip: "37902",
    foodDescription: "Boxed and canned items",
    comment: "",
    businessId: 2,
    volunteerId: 1,
    created_at: "2019-04-30 03:26:56",
    updated_at: "2019-04-30 03:26:56"
  }
];
