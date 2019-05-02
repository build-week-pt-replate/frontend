import React from "react";

import DonationRequest from "./DonationRequest";

const DonationRequests = props => {
  return (
    <div className="donation-request-wrapper">
      {props.requests.map(request => {
        return <DonationRequest key={request.id}
                                request={request}
        />
      })}
    </div>
  );
};

export default DonationRequests;
