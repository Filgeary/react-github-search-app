import { useQuery } from 'react-query'
import { fetchUserSearchList } from '../services/githubService'

export const useFetchUserSearchList = (user, page, sort) => {
  return useQuery(['users', user, page, sort], () => fetchUserSearchList(user, page, sort), {
    enabled: false,
  })
}
