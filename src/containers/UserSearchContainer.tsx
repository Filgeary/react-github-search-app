import React, { ChangeEvent, FC } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Search from '../components/Search'
import AlertComponent from '../components/ui/AlertComponent'
import { PaginationComponent } from '../components/ui/PaginationComponent'
import { UserList } from '../components/UserList'
import { MOBILE_BREAKPOINT } from '../constants'
import { useUserFavorites } from '../context/userFavoritesContext'
import { useFetchUserSearchList } from '../hooks/useFetchUserSearchList'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { useWindowSize } from '../hooks/useWindowSize'

const UserSearchContainer: FC = () => {
  const { state, addUser, removeUser } = useUserFavorites()

  const [userQuery, setUserQuery] = useSessionStorage('userQuery', '')
  const [pageCount, setPageCount] = useSessionStorage('userPage', 1)
  const [sortFilter, setSortFilter] = useSessionStorage('userSortFilter', 'match')

  const windowSize = useWindowSize()
  const isMobile = windowSize.width ? windowSize.width < MOBILE_BREAKPOINT : undefined

  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: responseData,
    refetch,
  } = useFetchUserSearchList(userQuery, pageCount, sortFilter)

  const hasNextPage = Boolean(responseData?.headers?.['link']?.includes('rel="next"'))
  const hasData = responseData?.data?.items?.length

  const handleChangeSearch = (user: string) => {
    setUserQuery(user)
    setPageCount(1)
    setTimeout(() => refetch(), 0)
  }

  const handleClickPrevPage = () => {
    setPageCount(prevState => +prevState - 1)
    setTimeout(() => refetch(), 0)
  }

  const handleClickNextPage = () => {
    setPageCount(prevState => +prevState + 1)
    setTimeout(() => refetch(), 0)
  }

  const handleChangeSelectFilter = (evt: ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value

    setSortFilter(value)
    setPageCount(1)
    setTimeout(() => refetch(), 0)
  }

  const handleAddToFavorite = (user: string) => addUser(user)
  const handleRemoveFromFavorite = (user: string) => removeUser(user)

  return (
    <>
      <Container className='sticky-top py-3 py-md-4 bg-light'>
        <Search
          onChangeInput={user => handleChangeSearch(user)}
          defaultValue={userQuery}
          isMobile={isMobile}
        />
      </Container>

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
          text={error instanceof Error ? error?.message : ''}
        />
      ) : (
        responseData && (
          <>
            <UserList
              userList={responseData.data.items}
              favoriteList={state.favoriteList}
              onChangeSelect={handleChangeSelectFilter}
              sortFilter={sortFilter}
              isMobile={isMobile}
              onAddToFavorite={handleAddToFavorite}
              onRemoveFromFavorite={handleRemoveFromFavorite}
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
