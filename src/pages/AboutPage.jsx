import React, { useEffect, useRef, useState } from 'react'
import { Container, ListGroup, NavLink, Stack } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'

const dataList = [
  'React, Hooks',
  'React-Router',
  'React-Bootstrap',
  'animations (React Transition Group)',
  'React Query',
  'axios',
  'lodash (debounce)',
  'Github API',
]

const AboutPage = () => {
  let contRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(true)
  }, [])

  return (
    <CSSTransition
      nodeRef={contRef}
      in={isShow}
      timeout={1500}
      classNames='fadeSlowDown'
      mountOnEnter
      unmountOnExit
    >
      <Container ref={contRef}>
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
    </CSSTransition>
  )
}

export default AboutPage
