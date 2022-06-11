import React from 'react'
import Search from '../components/Search'
import { Spinner } from 'react-bootstrap'
import { useGetUsers } from '../hooks/useGetUsers'
import AlertComponent from '../components/AlertComponent'
import { PaginationComponent } from '../components/PaginationComponent'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { UserCardList } from '../components/UserCardList'

const UserSearchContainer = () => {
  const [userQuery, setUserQuery] = useSessionStorage('userQuery', '')
  const [pageCount, setPageCount] = useSessionStorage('userPage', 1)
  const [sortFilter, setSortFilter] = useSessionStorage('userSortFilter', '')

  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: responseData,
    refetch,
  } = useGetUsers(userQuery, pageCount, sortFilter)

  const hasNextPage = responseData?.headers?.['link']?.includes('rel="next"')
  const hasData = responseData?.data?.items?.length

  const handleChangeSearch = user => {
    setUserQuery(user)
    setPageCount(1)
    setTimeout(() => {
      refetch().then(() => console.log('Refetch, User'))
    }, 0)
  }

  const handleClickPrevPage = () => {
    setPageCount(prevState => +prevState - 1)
    setTimeout(() => {
      refetch().then(() => console.log('Page - 1'))
    }, 0)
  }

  const handleClickNextPage = () => {
    setPageCount(prevState => +prevState + 1)
    setTimeout(() => {
      refetch().then(() => console.log('Page + 1'))
    }, 0)
  }

  const handleChangeSelectFilter = evt => {
    const value = evt.target.value

    setSortFilter(value)
    setPageCount(1)
    setTimeout(() => {
      refetch().then(() => console.log('change filter -', value))
    }, 0)
  }

  return (
    <>
      <Search
        onChangeInput={user => handleChangeSearch(user)}
        defaultValue={userQuery}
      />

      {isLoading ? (
        <>
          <Spinner
            as='span'
            animation='border'
            variant='primary'
          />
          <span>Loading...</span>
        </>
      ) : isError ? (
        <AlertComponent
          variant='danger'
          heading='Error'
          text={error.message}
        />
      ) : (
        responseData && (
          <>
            <UserCardList
              userList={responseData.data}
              onChangeSelect={handleChangeSelectFilter}
              sortFilter={sortFilter}
            />

            {hasData ? (
              <PaginationComponent
                pageCount={pageCount}
                onClickPrevPage={handleClickPrevPage}
                isFetching={isFetching}
                onClickNextPage={handleClickNextPage}
                hasNextPage={hasNextPage}
              />
            ) : (
              <AlertComponent
                variant='danger'
                heading='Not Found!'
                text='Try to change search'
              />
            )}
          </>
        )
      )}
    </>
  )
}

export default UserSearchContainer
