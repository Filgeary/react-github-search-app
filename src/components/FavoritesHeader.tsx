import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

export const FavoritesHeader: FC = () => (
  <div className='d-flex flex-wrap justify-content-between align-items-center'>
    <h2 className='mb-0'>❤ Your Favorites List</h2>
    <Button variant='outline-danger'>Clear List</Button>
  </div>
)
