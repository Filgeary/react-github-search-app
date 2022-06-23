import React from 'react'
import { Form, Row } from 'react-bootstrap'
import UserCard from './UserCard'

export const UserCardList = ({ userList, onChangeSelect, sortFilter }) => {
  return (
    <>
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
        {userList &&
          userList.items?.map(user => (
            <UserCard
              user={user}
              key={user.id}
            />
          ))}
      </Row>
    </>
  )
}
