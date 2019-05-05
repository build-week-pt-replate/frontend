import React from "react";
import RequestCard from "./RequestCard";

import "./RequestList.css";

const RequestList = props => {
  return (
    <div className="available-requests-container">
      {props.requests
        .filter(request => {
          //Checks if the requests is in volunteer city and has not been taken
          if (
            props.account.city === request.locationCity &&
            request.volunteerId === null
          ) {
            return request;
          }
        })
        .map(request => {
          return (
            <RequestCard
              request={request}
              key={request.id}
              account={props.account}
              acceptRequest={props.acceptRequest}
              removeRequest={props.removeRequest}
            />
          );
        })}
    </div>
  );
};

export default RequestList;
