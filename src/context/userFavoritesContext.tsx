import React, { FC, useCallback, useContext, useEffect, useMemo, useReducer } from 'react'
import { LOCAL_STORAGE_KEY } from '../constants'
import { localStorageHelper } from '../utils'

type Action =
  | { type: 'ADD_USER'; payload: string }
  | { type: 'ADD_ALL_USERS'; payload: string[] }
  | { type: 'REMOVE_USER'; payload: string }
  | { type: 'CLEAR' }
type Dispatch = (action: Action) => void

interface State {
  favoriteList: string[]
}

type Context = { state: State; dispatch: Dispatch }

const userFavoritesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        favoriteList: [...new Set([...state.favoriteList, action.payload])],
      }
    case 'ADD_ALL_USERS':
      return {
        ...state,
        favoriteList: [...new Set([...state.favoriteList, ...action.payload])],
      }
    case 'REMOVE_USER':
      return {
        ...state,
        favoriteList: state.favoriteList.filter(item => item !== action.payload),
      }
    case 'CLEAR':
      return {
        ...state,
        favoriteList: [],
      }
    default:
      return state
  }
}

const UserFavoritesContext = React.createContext<Context | undefined>(undefined)
const initialState: State = {
  favoriteList: [],
}

export const UserFavoritesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(userFavoritesReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])

  // sync localStorage & context on mounting
  useEffect(() => {
    const value = localStorageHelper.get(LOCAL_STORAGE_KEY.favoriteList)
    if (value && Array.isArray(value)) {
      dispatch({ type: 'ADD_ALL_USERS', payload: value })
    }
  }, [])

  // prettier-ignore
  return (
    <UserFavoritesContext.Provider value={value}>
      {children}
    </UserFavoritesContext.Provider>
  )
}

export const useUserFavorites = () => {
  const context = useContext(UserFavoritesContext)

  if (!context) {
    throw new Error('useUserFavorites must be use within UserFavoritesProvider')
  }

  const { state, dispatch } = context

  const addUser = useCallback(
    (user: string) => {
      dispatch({ type: 'ADD_USER', payload: user })
      localStorageHelper.add(LOCAL_STORAGE_KEY.favoriteList, user)
    },
    [dispatch],
  )

  const removeUser = useCallback(
    (user: string) => {
      dispatch({ type: 'REMOVE_USER', payload: user })
      localStorageHelper.remove(LOCAL_STORAGE_KEY.favoriteList, user)
    },
    [dispatch],
  )

  const clear = useCallback(() => {
    dispatch({ type: 'CLEAR' })
    localStorageHelper.remove(LOCAL_STORAGE_KEY.favoriteList)
  }, [dispatch])

  return {
    state,
    addUser,
    removeUser,
    clear,
  } as const
}
