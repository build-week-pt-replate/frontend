import React from "react";
import RequestCard from "./RequestCard";

import "./RequestList.css";
import food1 from "../../images/food1.jpeg";
import food2 from "../../images/food2.jpeg";
import food3 from "../../images/food3.jpeg";
import food4 from "../../images/food4.jpeg";

const foodArray = [food1, food2, food3, food4];

const RequestList = props => {
  return (
    <div className="available-requests-container">
      {props.requests.map((request, index) => {
        const imagePath = foodArray[index % 4];
        //Checks if the requests is in volunteer city and has not been taken
        if (
          props.account.city === request.locationCity &&
          request.volunteerId === null
        ) {
          return (
            <RequestCard
              request={request}
              key={request.id}
              account={props.account}
              acceptRequest={props.acceptRequest}
              removeRequest={props.removeRequest}
              imagePath={imagePath}
              completeRequest={props.completeRequest}
            />
          );
        }
      })}
    </div>
  );
};

export default RequestList;
