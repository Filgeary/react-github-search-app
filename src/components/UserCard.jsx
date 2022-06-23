import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const UserCard = ({ user }) => {
  const { avatar_url, login, type } = user

  return (
    <Col>
      <Card>
        <Card.Img
          style={{ minWidth: 100, minHeight: 100 }}
          variant='top'
          src={avatar_url}
          alt={login}
        />
        <Card.Body className='p-3'>
          <Card.Title>{login}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <LinkContainer to={`/profile/${login}`}>
            <Button variant='primary'>Open Profile</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default UserCard
