import React from "react";

const DonationRequest = props => {
  return (
    // get day of the week by converting date
    <ul>
      <li className='location-name'>
        {props.request.locationName}
      </li>
      <li>
        Date: {props.request.date}
      </li>
      <li>
        Time: {props.request.time}
      </li>
      <li>
        Food Description: {props.request.foodDescription}
      </li>
    </ul>
  );
};

export default DonationRequest;
