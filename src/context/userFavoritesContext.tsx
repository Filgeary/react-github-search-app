import React, { FC, useContext, useReducer } from 'react'

type Action =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'ADD_ALL_ITEMS'; payload: string[] }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR' }
type Dispatch = (action: Action) => void

interface State {
  favoriteList: string[]
}

type Context = { state: State; dispatch: Dispatch }

const userFavoritesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        favoriteList: [...new Set([...state.favoriteList, action.payload])],
      }
    case 'ADD_ALL_ITEMS':
      return {
        ...state,
        favoriteList: [...new Set([...state.favoriteList, ...action.payload])],
      }
    case 'REMOVE_ITEM':
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
  const value = { state, dispatch }

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

  return context
}
