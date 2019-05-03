import React from "react";

const DonationRequest = props => {
  return (
    // get day of the week by converting date
    <ul>
      <li>{props.request.locationName}</li>
      <li>{props.request.date}</li>
      <li>{props.request.time}</li>
      <li>{props.request.foodDescription}</li>
    </ul>
  );
};

export default DonationRequest;
