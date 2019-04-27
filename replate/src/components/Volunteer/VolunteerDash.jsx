import React from "react";

class VolunteerDash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="volunteer-dash">
        <div className="requests-box">
          <h3>Available Requests</h3>
        </div>
        <div className="requests-box">
          <h3>Current Requests</h3>
        </div>
      </div>
    );
  }
}
