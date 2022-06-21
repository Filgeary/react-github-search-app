import React from 'react'
import { Container, ListGroup, NavLink, Stack } from 'react-bootstrap'

const dataList = [
  'React, Hooks',
  'React-Router',
  'React-Bootstrap',
  'React Query',
  'axios',
  'lodash (debounce)',
  'Github API',
]

const AboutPage = () => {
  return (
    <Container>
      <h1 className='visually-hidden'>About</h1>

      <Stack gap={5}>
        <Container>
          <h2>Tech Stack & tools</h2>

          <ListGroup variant='flush'>
            {dataList &&
              dataList.map((item, idx) => (
                <ListGroup.Item
                  key={idx}
                  style={{ backgroundColor: 'inherit' }}
                >
                  {item}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Container>

        <p>
          Developed by:{' '}
          <NavLink
            href='https://github.com/Filgeary'
            target='_blank'
            rel='noopener noreferrer'
            className='d-inline-block px-0 border-bottom'
          >
            Filgeary 👉
          </NavLink>
        </p>
      </Stack>
    </Container>
  )
}

export default AboutPage
