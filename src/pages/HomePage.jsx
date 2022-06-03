import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import Search from '../components/Search'
import CardComponent from '../components/CardComponent'
import AlertComponent from '../components/AlertComponent'

const HomePage = () => {
  const logger = text => console.log(text)

  return (
    <Container>
      <Stack gap={4}>
        <h1>🔎 Search Github Users & Repos</h1>

        <AlertComponent
          variant='info'
          heading='Info Message'
          text='Type below to search anything 👇'
        />
        <Search onChangeInput={logger} />
        <CardComponent />
      </Stack>
    </Container>
  )
}

export default HomePage
