import React, { FC, useEffect, useRef, useState } from 'react'
import {
  Badge,
  Card,
  Col,
  Figure,
  Image,
  ListGroup,
  ListGroupItem,
  NavLink,
  Row,
  Stack,
} from 'react-bootstrap'
import { GeoAltFill, Twitter } from 'react-bootstrap-icons'
import { CSSTransition } from 'react-transition-group'
import { IUser } from '../models/IUser'
import { formatTwitterUrl, formatWebsiteUrl } from '../utils'

type Props = {
  user: IUser | undefined
}
const UserProfile: FC<Props> = ({ user }) => {
  const cardRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(!!user)
  }, [user])

  if (!user) return null

  const {
    login,
    avatar_url,
    location,
    name,
    bio,
    company,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user

  return (
    <CSSTransition
      nodeRef={cardRef}
      in={isShow}
      timeout={700}
      classNames='fadeLeft'
      mountOnEnter
      unmountOnExit
    >
      <Card
        ref={cardRef}
        className='p-4 mb-2'
        style={{ boxShadow: '5px 5px 0 0 #ccc' }}
      >
        <Card.Body>
          <Row>
            <Col
              sm={3}
              className='text-center px-2 mb-2 mb-md-0'
            >
              <Figure>
                <Image
                  style={{ minWidth: 140, minHeight: 140 }}
                  src={avatar_url}
                  alt={login}
                  roundedCircle
                  fluid
                />
              </Figure>
              <h4>@{login}</h4>

              {location && (
                <div>
                  <span>
                    {/*@ts-ignore-next-line*/}
                    <GeoAltFill />
                  </span>{' '}
                  {location}
                </div>
              )}
            </Col>

            <Col className='px-2 px-md-5'>
              <Stack gap={3}>
                <h3 className='text-center text-md-start'>{name}</h3>

                {bio && <p>{bio}</p>}

                <ListGroup variant='flush'>
                  {company && (
                    <ListGroupItem className='d-flex align-items-center gap-2 px-0'>
                      <span>🏢</span>
                      <span>{company}</span>
                    </ListGroupItem>
                  )}
                  {blog && (
                    <ListGroupItem className='d-flex align-items-center gap-2 px-0'>
                      <span>🔗</span>
                      <NavLink
                        href={formatWebsiteUrl(blog)}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='d-inline-block px-0 py-0'
                      >
                        {blog}
                      </NavLink>
                    </ListGroupItem>
                  )}
                  {twitter_username && (
                    <ListGroupItem className='d-flex align-items-center gap-2 px-0'>
                      {/*@ts-ignore-next-line*/}
                      <Twitter />
                      <NavLink
                        href={formatTwitterUrl(twitter_username)}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='d-inline-block px-0 py-0'
                      >
                        {'@' + twitter_username}
                      </NavLink>
                    </ListGroupItem>
                  )}
                </ListGroup>

                <div className='d-flex gap-2 flex-wrap'>
                  <h5 className='d-inline-block'>
                    <Badge
                      pill
                      bg='primary'
                    >
                      Followers: {followers}
                    </Badge>{' '}
                  </h5>
                  <h5 className='d-inline-block'>
                    <Badge
                      pill
                      bg='info'
                    >
                      Following: {following}
                    </Badge>{' '}
                  </h5>
                  <h5 className='d-inline-block'>
                    <Badge
                      pill
                      bg='warning'
                      text='dark'
                    >
                      Repos: {public_repos}
                    </Badge>{' '}
                  </h5>
                  <h5 className='d-inline-block'>
                    <Badge
                      pill
                      bg='dark'
                    >
                      Gists: {public_gists}
                    </Badge>
                  </h5>
                </div>

                <NavLink
                  href={html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-0 border-bottom'
                >
                  Open Profile on GitHub 👉
                </NavLink>
              </Stack>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </CSSTransition>
  )
}

export default UserProfile
