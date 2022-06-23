import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import UserSearchContainer from '../containers/UserSearchContainer'

const HomePage = () => {
  return (
    <Container>
      <h1 className='visually-hidden'>Github Search</h1>

      <Stack gap={4}>
        <h2>🔎 Search Github Users</h2>

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
