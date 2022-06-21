import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const UserCard = ({ user }) => {
  const { avatar_url, login, type } = user

  return (
    <Col>
      <Card style={{ borderBottom: '2px solid #ccc' }}>
        <Card.Img
          style={{ minWidth: 160, minHeight: 160 }}
          variant='top'
          src={avatar_url}
          alt={login}
        />
        <Card.Body>
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
