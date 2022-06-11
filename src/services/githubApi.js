import axios from 'axios'

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || ''

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    Authorization: `Token ${GITHUB_TOKEN}`,
  },
})

export const getUsers = async (user, page = '1', sort = '') => {
  const sortQuery = sort ? `&sort=${sort}` : ''

  return await githubApi.get(
    `/search/users?q=${user}&page=${page}&per_page=10${sortQuery}`,
  )
}

export const getUser = async user => {
  return await githubApi.get(`/users/${user}`)
}

export const getReposByUser = async (user, page = '1', sort = '') => {
  const sortQuery = sort ? `&sort=${sort}` : ''

  return await githubApi.get(
    `/users/${user}/repos?page=${page}&per_page=20${sortQuery}`,
  )
}
