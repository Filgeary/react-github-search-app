import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useUserFavorites } from '../context/userFavoritesContext'

export const FavoritesHeader: FC = () => {
  const { dispatch } = useUserFavorites()

  return (
    <div className='d-flex flex-wrap justify-content-between align-items-center'>
      <h2 className='mb-0'>❤ Your Favorites List</h2>
      <Button
        variant='outline-danger'
        onClick={() => dispatch({ type: 'CLEAR' })}
      >
        Clear List
      </Button>
    </div>
  )
}
