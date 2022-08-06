import React, { ChangeEvent, FC, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import ReposList from '../components/ReposList'
import AlertComponent from '../components/ui/AlertComponent'
import { PaginationComponent } from '../components/ui/PaginationComponent'
import { useFetchReposByUser } from '../hooks/useFetchReposByUser'

type Props = {
  queryId: string
}
const ReposListContainer: FC<Props> = ({ queryId }) => {
  const [pageCount, setPageCount] = useState(1)
  const [sortFilter, setSortFilter] = useState('updated')

  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: responseData,
  } = useFetchReposByUser(queryId, pageCount, sortFilter)

  const data = responseData?.data
  const hasData = responseData?.data?.length
  const hasNextPage = Boolean(responseData?.headers?.['link']?.includes('rel="next"'))

  const handleClickPrevPage = () => setPageCount(prevPage => prevPage - 1)
  const handleClickNextPage = () => setPageCount(prevPage => prevPage + 1)
  const handleChangeSelectFilter = (evt: ChangeEvent<HTMLSelectElement>) => {
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
        text={error instanceof Error ? error?.message : ''}
      />
    )
  }

  return data ? (
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
  ) : null
}

export default ReposListContainer
