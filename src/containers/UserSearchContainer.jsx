import React, { useState } from 'react'
import Search from '../components/Search'
import CardComponent from '../components/CardComponent'
import { getUsers } from '../services/githubApi'
import { Button, Container } from 'react-bootstrap'

const UserSearchContainer = () => {
  const [pageCount, setPageCount] = useState(1)

  const handleGetUsers = (user, page) => {
    getUsers(user, page).then(data => console.log(data))
  }

  return (
    <>
      <Search onChangeInput={user => handleGetUsers(user, pageCount)} />
      <CardComponent />

      <Container className='text-center'>
        <p>Current Page: {pageCount}</p>
        <Button
          className='mx-3'
          variant='secondary'
          type='button'
          onClick={() => setPageCount(prevState => prevState - 1)}
          disabled={pageCount === 1}
        >
          ⬅ Prev Page
        </Button>
        <Button
          variant='secondary'
          type='button'
          onClick={() => setPageCount(prevState => prevState + 1)}
        >
          Next Page ➡
        </Button>
      </Container>
    </>
  )
}

export default UserSearchContainer
