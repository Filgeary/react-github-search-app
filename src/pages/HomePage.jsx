import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import Search from '../components/Search'
import CardComponent from '../components/CardComponent'

const HomePage = () => {
  return (
    <Container>
      <Stack gap={4}>
        <h1>Search Github Users & Repos</h1>

        <Search />
        <CardComponent />
      </Stack>
    </Container>
  )
}

export default HomePage
