import React from "react";

const DonationRequest = props => {
  return (
    <>
      <li>
        {props.request.date}
      </li>
      <li>
        {props.request.time}
      </li>
      <li>
        {props.request.foodDescription}
      </li>
    </>
  );
};

export default DonationRequest;
