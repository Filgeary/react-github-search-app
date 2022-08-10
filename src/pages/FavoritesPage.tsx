import React, { FC } from 'react'
import { Container, Stack } from 'react-bootstrap'
import FavoritesContainer from '../containers/FavoritesContainer'

const FavoritesPage: FC = () => {
  return (
    <Container>
      <h1 className='visually-hidden'>User Favorites Page</h1>

      <Stack gap={4}>
        <h2 className='mb-0'>❤ Your Favorites List</h2>

        <FavoritesContainer />
      </Stack>
    </Container>
  )
}

export default FavoritesPage
