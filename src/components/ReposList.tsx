import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Badge, Container, Form, NavLink, Row, Stack } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import { IRepo } from '../models/IRepo'

type Props = {
  repos: IRepo[] | undefined
  onChangeSelect: (evt: ChangeEvent<HTMLSelectElement>) => void
  sortFilter: string
}
const ReposList: FC<Props> = ({ repos, onChangeSelect, sortFilter }) => {
  const contRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(!!repos?.length)
  }, [repos])

  return (
    <CSSTransition
      in={isShow}
      timeout={700}
      classNames='fadeUp'
      mountOnEnter
      unmountOnExit
      nodeRef={contRef}
    >
      <Container ref={contRef}>
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h2 className='mb-0'>Repos</h2>

          <Form.Select
            className='w-auto'
            onChange={onChangeSelect}
            defaultValue={sortFilter}
          >
            <option value='updated'>Last Updated</option>
            <option value=''>Name | A-Z</option>
          </Form.Select>
        </div>

        <Stack gap={3}>
          {repos?.map(repo => {
            const { id, name, description, fork, stargazers_count, topics, html_url } = repo

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
                  {topics?.map(topic => {
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
    </CSSTransition>
  )
}

export default ReposList
