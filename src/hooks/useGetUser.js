import { useQuery } from 'react-query'
import { getUser } from '../services/githubApi'

export const useGetUser = user => {
  return useQuery(['user', user], () => getUser(user))
}
