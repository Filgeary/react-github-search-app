import { useQuery } from 'react-query'
import { fetchReposByUser } from '../services/githubService'

export const useFetchReposByUser = (user, page, sort) => {
  return useQuery(['repos', user, page, sort], () => fetchReposByUser(user, page, sort))
}
