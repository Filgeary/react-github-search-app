import axios from 'axios'

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || ''

const githubService = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
})

if (GITHUB_TOKEN) {
  githubService.defaults.headers.common['Authorization'] = `token ${GITHUB_TOKEN}`
}

export const fetchUsers = async (user: string, page = 1, sort = '') => {
  const sortQuery = sort ? `&sort=${sort}` : ''

  return await githubService.get(`/search/users?q=${user}&page=${page}&per_page=10${sortQuery}`)
}

export const fetchUser = async (user: string) => {
  return await githubService.get(`/users/${user}`)
}

export const fetchReposByUser = async (user: string, page = 1, sort = '') => {
  const sortQuery = sort ? `&sort=${sort}` : ''

  return await githubService.get(`/users/${user}/repos?page=${page}&per_page=20${sortQuery}`)
}
