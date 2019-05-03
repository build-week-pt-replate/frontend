import React from "react";

import DonationRequest from "./DonationRequest";

import food1 from '../../images/food1.jpeg';
import food2 from '../../images/food2.jpeg';
import food3 from '../../images/food3.jpeg';
import food4 from '../../images/food4.jpeg';

const foodArray = [food1, food2, food3, food4];

const DonationRequests = props => {
  return (
    <div className="donation-request-wrapper">
      {props.requests.map((request, index) => {
        const imagePath = foodArray[index % 4];

        return <DonationRequest key={request.id}
                                request={request}
                                imagePath={imagePath}
        />
      })}
    </div>
  );
};

export default DonationRequests;
