import React from 'react'
import { Container } from 'react-bootstrap'
import Search from '../components/Search'

const HomePage = () => {
  return (
    <Container>
      <h1>Search Github Users & Repos</h1>

      <Search />
    </Container>
  )
}

export default HomePage
