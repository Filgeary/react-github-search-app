import React, { FC } from 'react'
import { Spinner } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import UserProfile from '../components/UserProfile'
import { useFetchUser } from '../hooks/useFetchUser'

type Props = {
  queryId: string
}
const UserProfileContainer: FC<Props> = ({ queryId }) => {
  const { isLoading, isError, error, data: responseData } = useFetchUser(queryId)

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
        text={error instanceof Error ? error?.message : ''}
      />
    )
  }

  return responseData ? <UserProfile user={responseData.data} /> : null
}

export default UserProfileContainer
