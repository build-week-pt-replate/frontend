import React from "react";

import DonationRequest from "./DonationRequest";

const DonationRequests = props => {
  return (
    <ul>
      {props.requests.map(request => {
        return <DonationRequest key={request.id}
                                request={request}
        />
      })}
    </ul>
  );
};

export default DonationRequests;
