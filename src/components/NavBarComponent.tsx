import React, { FC } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBarComponent: FC = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
    >
      <Container>
        <Nav className='me-auto px-3 px-md-0'>
          <LinkContainer
            to='/'
            exact
          >
            <Nav.Link className='navbar-brand active'>Github Search</Nav.Link>
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
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent
