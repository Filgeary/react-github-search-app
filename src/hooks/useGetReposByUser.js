import { useQuery } from 'react-query'
import { getReposByUser } from '../services/githubApi'

export const useGetReposByUser = user => {
  return useQuery(['repos', user], () => getReposByUser(user))
}
