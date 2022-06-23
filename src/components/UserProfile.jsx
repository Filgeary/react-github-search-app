import React from 'react'
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
import { formatTwitterUrl, formatWebsiteUrl } from '../utils'

const UserProfile = ({ user }) => {
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
    <Card
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
              <p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-geo-alt-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                </svg>{' '}
                {location}
              </p>
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
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-twitter'
                      viewBox='0 0 16 16'
                    >
                      <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                    </svg>
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
  )
}

export default UserProfile
