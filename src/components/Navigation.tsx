import React, { FC } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useUserFavorites } from '../context/userFavoritesContext'

const Navigation: FC = () => {
  const { state } = useUserFavorites()
  const favoritesCount = state.favoriteList.length

  return (
    <Navbar
      bg='dark'
      variant='dark'
    >
      <Container>
        <Nav className='d-flex flex-wrap w-100 justify-content-between px-3 px-md-0'>
          <div className='d-flex'>
            <LinkContainer
              to='/'
              exact
            >
              <Nav.Link className='navbar-brand active'>GitHub Search</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to='/'
              exact
            >
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to='/about'
              exact
            >
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </div>

          <div className='d-flex flex-wrap'>
            <LinkContainer
              to='/favorites'
              exact
            >
              <Nav.Link>
                <div className='d-flex gap-2 align-items-center'>
                  Favorites
                  {favoritesCount > 0 ? <Badge bg='danger'>{favoritesCount}</Badge> : null}
                </div>
              </Nav.Link>
            </LinkContainer>
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
