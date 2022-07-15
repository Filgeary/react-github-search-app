import { useQuery } from 'react-query'
import { fetchUser } from '../services/githubApi'

export const useGetUser = user => {
  return useQuery(['user', user], () => fetchUser(user))
}
