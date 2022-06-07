import React from 'react'
import { useGetUser } from '../hooks/useGetUser'
import { Spinner } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import UserProfile from '../components/UserProfile'

const UserProfileContainer = ({ queryId }) => {
  const { isLoading, isError, error, data: responseData } = useGetUser(queryId)

  if (isLoading) {
    return (
      <>
        <Spinner
          as='span'
          animation='border'
          variant='primary'
        />
        <span>Loading...</span>
      </>
    )
  }

  if (isError) {
    return (
      <AlertComponent
        variant='danger'
        heading='Error'
        text={error.message}
      />
    )
  }

  return responseData && <UserProfile user={responseData.data} />
}

export default UserProfileContainer
