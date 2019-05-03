import React from 'react'
import RequestCard from './RequestCard';

const Requests = props => {
  return (
    <div className='available-requests-container'>
      {props.requests.map(request => {
        return <RequestCard request={request} key={request.id} />
      })}
    </div>
  )
}