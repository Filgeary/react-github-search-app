import { useQuery } from 'react-query'
import { fetchUser } from '../services/githubService'

export const useFetchUser = user => {
  return useQuery(['user', user], () => fetchUser(user))
}
