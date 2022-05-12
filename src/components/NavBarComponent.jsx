import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBarComponent = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
    >
      <Container className='px-5'>
        <Navbar.Brand href='/'>Github Search</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/search'>Search</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent
