import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import UserSearchContainer from '../containers/UserSearchContainer'

const HomePage = () => {
  return (
    <Container>
      <Stack gap={4}>
        <h1>🔎 Search Github Users</h1>

        <AlertComponent
          variant='info'
          heading='Info Message'
          text='Type below to search Users 👇'
        />
        <UserSearchContainer />
      </Stack>
    </Container>
  )
}

export default HomePage
