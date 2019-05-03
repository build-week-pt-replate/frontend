import React from "react";

const DonationRequest = props => {
  return (
<<<<<<< HEAD
    <>
      <li>{props.request.date}</li>
      <li>{props.request.time}</li>
      <li>{props.request.foodDescription}</li>
    </>
=======
    // get day of the week by converting date
    <ul>
      <li>
        {props.request.locationName}
      </li>
      <li>
        {props.request.date}
      </li>
      <li>
        {props.request.time}
      </li>
      <li>
        {props.request.foodDescription}
      </li>
    </ul>
>>>>>>> a214e0f27cca3c244aece6f17504e62b68393485
  );
};

export default DonationRequest;
