import React from "react";
import RequestCard from "./RequestCard";

import "./RequestList.css";

const VolunteerRequestList = props => {
  return (
    <div className="available-requests-container">
      {props.requests.map(request => {
        if (localStorage.getItem("id") === request.volunteerId) {
          <RequestCard
            request={request}
            key={request.id}
            removeRequest={props.removeRequest}
          />
        }
      })}
    </div>
  );
};

export default VolunteerRequestList;
