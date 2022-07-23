import React, { ChangeEvent, FC } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import { PaginationComponent } from '../components/PaginationComponent'
import Search from '../components/Search'
import { UserSearchList } from '../components/UserSearchList'
import { MOBILE_BREAKPOINT } from '../constants'
import { useFetchUserSearchList } from '../hooks/useFetchUserSearchList'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { useWindowSize } from '../hooks/useWindowSize'

const UserSearchContainer: FC = () => {
  const [userQuery, setUserQuery] = useSessionStorage('userQuery', '')
  const [pageCount, setPageCount] = useSessionStorage('userPage', 1)
  const [sortFilter, setSortFilter] = useSessionStorage('userSortFilter', '')

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
            <UserSearchList
              userList={responseData.data}
              onChangeSelect={handleChangeSelectFilter}
              sortFilter={sortFilter}
              isMobile={isMobile}
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
