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
    <Container className='text-center mb-4'>
      <p>Current Page: {pageCount}</p>

      <div className='d-flex justify-content-center gap-4'>
        <Button
          variant='outline-secondary'
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
          {isFetching ? 'Loading...' : <span>&#8592; Back</span>}
        </Button>
        <Button
          variant='outline-secondary'
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
          {isFetching ? 'Loading...' : <span>Next &#8594;</span>}
        </Button>
      </div>
    </Container>
  )
}
