import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CardComponent = () => {
  return (
    <Row
      md={4}
      className='g-4'
    >
      <Col>
        <Card>
          <Card.Img
            style={{ minWidth: 160, minHeight: 160 }}
            variant='top'
            src='https://via.placeholder.com/300'
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>The quick brown fox jumps over the lazy dog</Card.Text>
            <LinkContainer to={`/profile/react`}>
              <Button variant='primary'>Read More</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default CardComponent
