import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CardComponent = ({ item }) => {
  const { avatar_url, login, type } = item

  return (
    <Col>
      <Card>
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
            <Button variant='primary'>Read More</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardComponent
