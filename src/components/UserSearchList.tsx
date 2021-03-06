import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Form, Row, Stack } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import { IUserSearchList } from '../models/IUserSearchList'
import UserCard from './UserCard'

type Props = {
  userList: IUserSearchList | undefined
  onChangeSelect: (evt: ChangeEvent<HTMLSelectElement>) => void
  sortFilter: string
  isMobile: boolean | undefined
}
export const UserSearchList: FC<Props> = ({ userList, onChangeSelect, sortFilter, isMobile }) => {
  const stackRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(!!userList?.items.length)
  }, [userList])

  return (
    <CSSTransition
      in={isShow}
      timeout={700}
      classNames='fadeUp'
      mountOnEnter
      unmountOnExit
      nodeRef={stackRef}
    >
      <Stack
        gap={4}
        ref={stackRef}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='mb-0'>Users</h2>

          <Form.Select
            className='w-auto'
            onChange={onChangeSelect}
            defaultValue={sortFilter}
          >
            <option value=''>Best Match</option>
            <option value='followers'>Followers</option>
            <option value='repositories'>Repos</option>
          </Form.Select>
        </div>

        <Row
          xs={2}
          md={4}
          xl={5}
          className='g-2 justify-content-center g-md-4'
        >
          {userList?.items.map(user => (
            <UserCard
              key={user.id}
              user={user}
              isMobile={isMobile}
            />
          ))}
        </Row>
      </Stack>
    </CSSTransition>
  )
}
