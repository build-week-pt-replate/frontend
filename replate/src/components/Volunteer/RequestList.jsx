import React from 'react'
import RequestCard from './RequestCard';

import './RequestList.css'

const RequestList = props => {
  return (
    <div className='available-requests-container'>
      {props.requests.map(request => {
          //Checks if the requests is in volunteer city and has not been taken
          if (props.account.city === request.locationCity && request.volunteerId === null) {
            return <RequestCard request={request} key={request.id} />
          }
        }
      )}
    </div>
  )
}

export default RequestList