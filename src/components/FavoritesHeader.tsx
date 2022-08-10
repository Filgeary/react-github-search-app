import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

type Props = {
  onClearList: () => void
}
export const FavoritesHeader: FC<Props> = ({ onClearList }) => {
  return (
    <div className='d-flex flex-wrap justify-content-between align-items-center'>
      <h2 className='mb-0'>Users</h2>

      <Button
        variant='outline-danger'
        onClick={onClearList}
      >
        Clear List
      </Button>
    </div>
  )
}
