import React, { FC, useEffect, useRef, useState } from 'react'
import { Container, ListGroup, NavLink, Stack } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'

type Props = {
  dataList: string[]
}
const About: FC<Props> = ({ dataList }) => {
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
        <Stack gap={5}>
          <Container>
            <h2>Tech Stack & tools</h2>

            <ListGroup variant='flush'>
              {dataList?.map((item, idx) => (
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

export default About
