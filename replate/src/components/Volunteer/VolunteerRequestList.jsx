import React from 'react'
import RequestCard from './RequestCard';

import './RequestList.css'

const VolunteerRequestList = props => {
  return (
    <div className='available-requests-container'>
      {props.requests
        .filter(request => {
          if (props.account.id === request.volunteerId) {
            return request;
          }
        })
        .map(request => {
          return <RequestCard request={request} key={request.id} account={props.account} updatedRequest={props.updatedRequest} />
        })}
    </div>
  )
}

export default VolunteerRequestList