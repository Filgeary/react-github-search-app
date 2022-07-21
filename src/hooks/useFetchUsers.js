import { useQuery } from 'react-query'
import { fetchUsers } from '../services/githubService'

export const useFetchUsers = (user, page, sort) => {
  return useQuery(['users', user, page, sort], () => fetchUsers(user, page, sort), {
    enabled: false,
  })
}
