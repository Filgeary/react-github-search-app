import React, { FC } from 'react'
import { Container, Stack } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import UserSearchContainer from '../containers/UserSearchContainer'

const HomePage: FC = () => {
  return (
    <Container>
      <h1 className='visually-hidden'>GitHub Search</h1>

      <Stack gap={4}>
        <h2>🔎 Search GitHub Users</h2>

        <AlertComponent
          variant='info'
          heading='Welcome Message'
          text='Type below to search Users 👇'
          isDismissible={false}
        />
        <UserSearchContainer />
      </Stack>
    </Container>
  )
}

export default HomePage
