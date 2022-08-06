import React, { FC } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { FavoritesHeader } from '../components/FavoritesHeader'
import AlertComponent from '../components/ui/AlertComponent'
import { useUserFavorites } from '../context/userFavoritesContext'

const FavoritesPage: FC = () => {
  const { state } = useUserFavorites()
  const favoritesCount = state.favoriteList.length

  if (favoritesCount === 0) {
    return (
      <AlertComponent
        variant='warning'
        heading='Your Favorites List is Empty!'
        text='Try to Search Users and click on Heart ❤'
        isDismissible={false}
      />
    )
  }

  return (
    <Container>
      <h1 className='visually-hidden'>User Favorites Page</h1>

      <Stack gap={4}>
        <FavoritesHeader />
        <div>
          {state.favoriteList.map(x => (
            <p key={x}>{x}</p>
          ))}
        </div>
      </Stack>
    </Container>
  )
}

export default FavoritesPage
