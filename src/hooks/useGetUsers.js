import { useQuery } from 'react-query'
import { getUsers } from '../services/githubApi'

export const useGetUsers = (user, page, sort) => {
  return useQuery(
    ['users', user, page, sort],
    () => getUsers(user, page, sort),
    {
      enabled: false,
    },
  )
}
