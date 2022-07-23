import React, { FC } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { IUserSearchListItem } from '../models/IUserSearchList'

type Props = {
  user: IUserSearchListItem | undefined
  isMobile: boolean | undefined
}
const UserCard: FC<Props> = ({ user, isMobile }) => {
  const linkText = isMobile ? 'Open' : 'Open Profile'

  if (!user) return null

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
