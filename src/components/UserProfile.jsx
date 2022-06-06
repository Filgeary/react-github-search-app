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
      className='p-4'
      border='warning'
      style={{ boxShadow: '5px 5px 4px 0 #ccc' }}
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
                <b>
                  <i>Location:</i>
                </b>{' '}
                {location}
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
