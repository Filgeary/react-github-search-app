import React from 'react'
import { Badge, Container, NavLink, Row, Stack } from 'react-bootstrap'

const ReposList = ({ repos }) => {
  return (
    <Container>
      <h2>Repos</h2>

      <Stack gap={3}>
        {repos &&
          repos.map(repo => {
            const {
              id,
              name,
              description,
              fork,
              stargazers_count,
              topics,
              html_url,
            } = repo

            return (
              <Row
                key={id}
                className='border-bottom pb-3'
              >
                <div>
                  {fork && (
                    <h5 className='d-inline-block'>
                      <Badge
                        pill
                        bg='dark'
                      >
                        fork
                      </Badge>
                      &nbsp;
                    </h5>
                  )}{' '}
                  <NavLink
                    href={html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='d-inline-block px-0'
                  >
                    {name}
                  </NavLink>{' '}
                  / <span>{stargazers_count} ⭐</span>
                  {description && <p>{description}</p>}
                </div>
                <div className='d-flex flex-wrap gap-2'>
                  {topics.map(topic => {
                    return (
                      <h5
                        key={topic}
                        className='d-inline-block'
                      >
                        <Badge
                          pill
                          bg='warning'
                          text='dark'
                        >
                          {topic}
                        </Badge>
                      </h5>
                    )
                  })}
                </div>
              </Row>
            )
          })}
      </Stack>
    </Container>
  )
}

export default ReposList
