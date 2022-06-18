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

const UserProfile = ({ user }) => {
  const {
    login,
    avatar_url,
    location,
    name,
    bio,
    company,
    blog,
    twitter_username: twitter,
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
            className='text-center px-2'
          >
            <Figure>
              <Image
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

          <Col className='px-5'>
            <Stack gap={3}>
              <h3>{name}</h3>

              {bio && <p>{bio}</p>}

              <ListGroup variant='flush'>
                {company && (
                  <ListGroupItem>
                    <b>
                      <i>Company:</i>
                    </b>{' '}
                    {company}
                  </ListGroupItem>
                )}
                {blog && (
                  <ListGroupItem>
                    <b>
                      <i>Blog:</i>
                    </b>{' '}
                    {blog}
                  </ListGroupItem>
                )}
                {twitter && (
                  <ListGroupItem>
                    <b>
                      <i>Twitter:</i>
                    </b>{' '}
                    {twitter}
                  </ListGroupItem>
                )}
              </ListGroup>

              <div className='d-flex gap-2'>
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
