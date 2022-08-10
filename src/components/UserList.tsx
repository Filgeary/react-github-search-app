import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Form, Row, Stack } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import { IUser } from '../models/IUser'
import { IUserSearchList } from '../models/IUserSearchList'
import UserCard from './UserCard'

type Props = {
  userList: IUserSearchList['items'] | IUser[] | (IUser | undefined)[] | undefined
  favoriteList: string[]
  isMobile: boolean | undefined
  onAddToFavorite: (userLogin: string) => void
  onRemoveFromFavorite: (userLogin: string) => void
  onChangeSelect?: (evt: ChangeEvent<HTMLSelectElement>) => void
  sortFilter?: string
}
export const UserList: FC<Props> = ({
  userList,
  favoriteList,
  onChangeSelect,
  sortFilter,
  isMobile,
  onAddToFavorite,
  onRemoveFromFavorite,
}) => {
  const stackRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(!!userList?.length)
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
        {onChangeSelect && sortFilter && (
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='mb-0'>Users</h2>

            <Form.Select
              className='w-auto'
              onChange={onChangeSelect}
              defaultValue={sortFilter}
            >
              <option value='match'>Best Match</option>
              <option value='followers'>Followers</option>
              <option value='repositories'>Repos</option>
            </Form.Select>
          </div>
        )}

        <Row
          xs={2}
          md={4}
          xl={5}
          className='g-2 justify-content-center g-md-4'
        >
          {userList?.map(user => (
            <UserCard
              key={user?.id}
              user={user}
              favoriteList={favoriteList}
              isMobile={isMobile}
              onAddToFavorite={onAddToFavorite}
              onRemoveFromFavorite={onRemoveFromFavorite}
            />
          ))}
        </Row>
      </Stack>
    </CSSTransition>
  )
}
