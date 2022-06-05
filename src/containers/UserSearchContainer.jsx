import React, { useState } from 'react'
import Search from '../components/Search'
import CardComponent from '../components/CardComponent'
import { Button, Container, Row, Spinner } from 'react-bootstrap'
import { useGetUsers } from '../hooks/useGetUsers'
import AlertComponent from '../components/AlertComponent'

const UserSearchContainer = () => {
  const [userQuery, setUserQuery] = useState('')
  const [pageCount, setPageCount] = useState(1)

  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: responseData,
    refetch,
  } = useGetUsers(userQuery, pageCount)

  const hasNextPage = responseData?.headers?.['link']?.includes('rel="next"')

  const handleChangeSearch = user => {
    setUserQuery(user)
    setPageCount(1)
    setTimeout(() => refetch().then(() => console.log('Refetch, User')), 0)
  }

  const handleClickPrevPage = () => {
    setPageCount(prevState => prevState - 1)
    setTimeout(() => refetch().then(() => console.log('Page - 1')), 0)
  }

  const handleClickNextPage = () => {
    setPageCount(prevState => prevState + 1)
    setTimeout(() => refetch().then(() => console.log('Page + 1')), 0)
  }

  return (
    <>
      <Search onChangeInput={user => handleChangeSearch(user)} />

      {isLoading ? (
        <>
          <Spinner
            as='span'
            animation='border'
            variant='primary'
          />
          <span>Loading...</span>
        </>
      ) : isError ? (
        <AlertComponent
          variant='danger'
          heading='Error'
          text={error.message}
        />
      ) : (
        responseData && (
          <>
            <Row
              md={4}
              className='g-4 justify-content-center'
            >
              {responseData.data.items.map(item => {
                return (
                  <CardComponent
                    item={item}
                    key={item.id}
                  />
                )
              })}
            </Row>

            <Container className='text-center'>
              <p>Current Page: {pageCount}</p>

              <Button
                className='mx-4'
                variant='info'
                size='lg'
                type='button'
                onClick={handleClickPrevPage}
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
                onClick={handleClickNextPage}
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
          </>
        )
      )}
    </>
  )
}

export default UserSearchContainer
