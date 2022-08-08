import React, { FC, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { IUser } from '../models/IUser'
import { IUserSearchListItem } from '../models/IUserSearchList'
import { FavoritesIcon } from './ui/FavoritesIcon'

type Props = {
  user: IUserSearchListItem | IUser | undefined
  favoriteList: string[]
  isMobile: boolean | undefined
  onAddToFavorite: (userLogin: string) => void
  onRemoveFromFavorite: (userLogin: string) => void
}
const UserCard: FC<Props> = ({
  user,
  favoriteList,
  isMobile,
  onAddToFavorite,
  onRemoveFromFavorite,
}) => {
  const [isHover, setIsHover] = useState(false)
  const linkText = isMobile ? 'Open' : 'Open Profile'

  if (!user) return null
  const { avatar_url, login, type } = user

  const isFavorite = Boolean(favoriteList.find(item => item === login))
  const handleAddToFavorite = () => onAddToFavorite(login)
  const handleRemoveFromFavorite = () => onRemoveFromFavorite(login)

  return (
    <Col>
      <Card
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
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
        <FavoritesIcon
          isFavorite={isFavorite}
          isHover={isHover}
          onAddToFavorite={handleAddToFavorite}
          onRemoveFromFavorite={handleRemoveFromFavorite}
        />
      </Card>
    </Col>
  )
}

export default UserCard
