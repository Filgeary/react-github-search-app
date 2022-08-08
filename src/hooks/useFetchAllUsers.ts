import { AxiosResponse } from 'axios'
import { useQueries, UseQueryResult } from 'react-query'
import { IUser } from '../models/IUser'
import { fetchUser } from '../services/githubService'

export const useFetchAllUsers = (users: string[]) => {
  return useQueries<IUser[]>(
    users.map(user => {
      return {
        queryKey: ['user', user],
        queryFn: () => fetchUser(user),
      }
    }),
  ) as UseQueryResult<AxiosResponse<IUser>>[]
}
