import { useQuery } from 'react-query'
import { getReposByUser } from '../services/githubApi'

export const useGetReposByUser = (user, page, sort) => {
  return useQuery(['repos', user, page, sort], () =>
    getReposByUser(user, page, sort),
  )
}
