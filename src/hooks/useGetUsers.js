import { useQuery } from 'react-query'
import { getUsers } from '../services/githubApi'

export const useGetUsers = (user, page) => {
  return useQuery(['users', user, page], () => getUsers(user, page), {
    enabled: false,
  })
}
