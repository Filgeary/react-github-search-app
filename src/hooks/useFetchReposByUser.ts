import { useQuery } from 'react-query'
import { fetchReposByUser } from '../services/githubService'

export const useFetchReposByUser = (user: string, page?: number, sort?: string) => {
  return useQuery(['repos', user, page, sort], () => fetchReposByUser(user, page, sort))
}
