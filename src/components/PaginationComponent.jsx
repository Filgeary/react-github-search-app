import React from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'

export const PaginationComponent = props => {
  const {
    hasNextPage,
    isFetching,
    onClickNextPage,
    onClickPrevPage,
    pageCount,
  } = props

  return (
    <Container className='text-center'>
      <p>Current Page: {pageCount}</p>

      <Button
        className='mx-4'
        variant='info'
        size='lg'
        type='button'
        onClick={onClickPrevPage}
        disabled={isFetching || pageCount === 1}
      >
        {isFetching && (
          <Spinner
            as='span'
            size='sm'
            animation='border'
            variant='primary'
          />
        )}{' '}
        {isFetching ? 'Loading...' : '⬅ Back'}
      </Button>
      <Button
        variant='info'
        size='lg'
        type='button'
        onClick={onClickNextPage}
        disabled={isFetching || !hasNextPage}
      >
        {isFetching && (
          <Spinner
            as='span'
            size='sm'
            animation='border'
            variant='primary'
          />
        )}{' '}
        {isFetching ? 'Loading...' : 'Next ➡'}
      </Button>
    </Container>
  )
}
