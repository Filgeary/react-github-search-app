import React, { useState } from 'react'
import { useGetReposByUser } from '../hooks/useGetReposByUser'
import { Spinner } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import ReposList from '../components/ReposList'
import { PaginationComponent } from '../components/PaginationComponent'

const ReposListContainer = ({ queryId }) => {
  const [pageCount, setPageCount] = useState(1)
  const [sortFilter, setSortFilter] = useState('updated')

  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: responseData,
  } = useGetReposByUser(queryId, pageCount, sortFilter)

  const data = responseData?.data
  const hasData = responseData?.data?.length
  const hasNextPage = responseData?.headers?.['link']?.includes('rel="next"')

  const handleClickPrevPage = () => setPageCount(prevPage => prevPage - 1)
  const handleClickNextPage = () => setPageCount(prevPage => prevPage + 1)
  const handleChangeSelectFilter = evt => {
    setSortFilter(evt.target.value)
    setPageCount(1)
  }

  if (isLoading) {
    return (
      <>
        <Spinner
          as='span'
          animation='border'
          variant='primary'
        />
        <span>Loading...</span>
      </>
    )
  }

  if (isError) {
    return (
      <AlertComponent
        variant='danger'
        heading='Error'
        text={error.message}
      />
    )
  }

  return (
    data && (
      <>
        <ReposList
          repos={data}
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
            heading='Not Found Repos!'
          />
        )}
      </>
    )
  )
}

export default ReposListContainer
