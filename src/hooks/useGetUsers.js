import { useQuery } from 'react-query'
import { fetchUsers } from '../services/githubApi'

export const useGetUsers = (user, page, sort) => {
  return useQuery(
    ['users', user, page, sort],
    () => fetchUsers(user, page, sort),
    {
      enabled: false,
    },
  )
}
