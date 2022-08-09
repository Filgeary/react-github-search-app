import React, { FC } from 'react'
import { Spinner, Stack } from 'react-bootstrap'
import { FavoritesHeader } from '../components/FavoritesHeader'
import AlertComponent from '../components/ui/AlertComponent'
import { UserList } from '../components/UserList'
import { MOBILE_BREAKPOINT } from '../constants'
import { useUserFavorites } from '../context/userFavoritesContext'
import { useFetchAllUsers } from '../hooks/useFetchAllUsers'
import { useWindowSize } from '../hooks/useWindowSize'

const FavoritesContainer: FC = () => {
  const { state, removeUser, clear } = useUserFavorites()
  const favoritesCount = state.favoriteList.length

  const userListResponse = useFetchAllUsers(state.favoriteList)
  const userList = userListResponse?.map(item => item?.data?.data)

  const windowSize = useWindowSize()
  const isMobile = windowSize.width ? windowSize.width < MOBILE_BREAKPOINT : undefined

  const handleRemoveFromFavorite = (user: string) => removeUser(user)
  const handleClearList = () => clear()

  if (userListResponse.some(item => item.isLoading)) {
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

  if (userListResponse.some(item => item.isError)) {
    const error = userListResponse.find(item => item.error)?.error
    if (error) {
      return (
        <AlertComponent
          variant='danger'
          heading='Error'
          text={error instanceof Error ? error?.message : ''}
        />
      )
    }
  }

  if (favoritesCount === 0) {
    return (
      <AlertComponent
        variant='warning'
        heading='Your Favorites List is Empty!'
        text='Try to Search Users and click on Heart ❤'
        isDismissible={false}
      />
    )
  }

  return (
    <Stack gap={4}>
      <FavoritesHeader onClearList={handleClearList} />

      {userList?.length && (
        <UserList
          userList={userList}
          favoriteList={state.favoriteList}
          isMobile={isMobile}
          onRemoveFromFavorite={handleRemoveFromFavorite}
          onAddToFavorite={() => {}}
        />
      )}
    </Stack>
  )
}

export default FavoritesContainer
