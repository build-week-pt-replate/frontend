import React from 'react'
import RequestCard from './RequestCard';

<<<<<<< HEAD
import './RequestList.css'

=======
>>>>>>> 36d6c9d716fa612b0dd2102542622ef6acfb5931
const RequestList = props => {
  return (
    <div className='available-requests-container'>
      {props.requests
        // .filter(request => {
        //   if (props.account.city === request.locationCity) {
        //     return request
        //   }
        // })
        .map(request => {
          return <RequestCard request={request} key={request.id} />
        })}
    </div>
  )
}

export default RequestList