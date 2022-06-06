import React from 'react'
import {
  Badge,
  Col,
  Container,
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
    <Container>
      <Row>
        <Col
          sm={3}
          className='text-center'
        >
          <Figure>
            <Image
              src={avatar_url}
              alt={login}
              roundedCircle
              fluid
            />
          </Figure>
          <h2>@{login}</h2>

          {location && (
            <p>
              <i>Location:</i> {location}
            </p>
          )}
        </Col>

        <Col className='px-5'>
          <Stack gap={3}>
            <h3>{name}</h3>

            {bio && (
              <div>
                <h5>
                  <i>Bio</i>
                </h5>
                <p>{bio}</p>
              </div>
            )}

            <ListGroup variant='flush'>
              {company && (
                <ListGroupItem>
                  <i>Company:</i> {company}
                </ListGroupItem>
              )}
              {blog && (
                <ListGroupItem>
                  <i>Blog:</i> {blog}
                </ListGroupItem>
              )}
              {twitter && (
                <ListGroupItem>
                  <i>Twitter:</i> {twitter}
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
    </Container>
  )
}

export default UserProfile
