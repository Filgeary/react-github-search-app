import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import UserProfileContainer from '../containers/UserProfileContainer'
import { useParams } from 'react-router-dom'
import ReposListContainer from '../containers/ReposListContainer'

const ProfilePage = () => {
  const { id } = useParams()

  return (
    <Container>
      <Stack gap={4}>
        <h2 className='mb-0'>User Profile</h2>

        <UserProfileContainer queryId={id} />
        <ReposListContainer queryId={id} />
      </Stack>
    </Container>
  )
}

export default ProfilePage
