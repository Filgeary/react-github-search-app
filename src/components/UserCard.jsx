import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const UserCard = ({ user, isMobile }) => {
  const { avatar_url, login, type } = user
  const linkText = isMobile ? 'Open' : 'Open Profile'

  return (
    <Col>
      <Card>
        <Card.Img
          style={{ minWidth: 100, minHeight: 100 }}
          variant='top'
          src={avatar_url}
          alt={login}
        />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <LinkContainer to={`/profile/${login}`}>
            <Button
              variant='primary'
              className='w-100'
            >
              {linkText}
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default UserCard
