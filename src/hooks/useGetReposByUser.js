import { useQuery } from 'react-query'
import { getReposByUser } from '../services/githubApi'

export const useGetReposByUser = (user, page) => {
  return useQuery(['repos', user, page], () => getReposByUser(user, page))
}
