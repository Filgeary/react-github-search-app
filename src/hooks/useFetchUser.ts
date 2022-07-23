import { useQuery } from 'react-query'
import { fetchUser } from '../services/githubService'

export const useFetchUser = (user: string) => {
  return useQuery(['user', user], () => fetchUser(user))
}
