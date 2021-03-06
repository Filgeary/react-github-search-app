import React, { FC } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ReposListContainer from '../containers/ReposListContainer'
import UserProfileContainer from '../containers/UserProfileContainer'

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <Container>
      <Stack gap={4}>
        <h1 className='visually-hidden'>User Profile</h1>

        <UserProfileContainer queryId={id} />
        <ReposListContainer queryId={id} />
      </Stack>
    </Container>
  )
}

export default ProfilePage
