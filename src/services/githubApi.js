import axios from 'axios'

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || ''

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    Authorization: `Token ${GITHUB_TOKEN}`,
  },
})

export const getUsers = async (user, page = '1') => {
  const { data, headers } = await githubApi.get(
    `/search/users?q=${user}&page=${page}&per_page=10`,
  )
  return { data, headers }
}

export const getUser = async user => {
  return await githubApi.get(`/users/${user}`)
}

export const getReposByUser = async user => {
  return await githubApi.get(`/users/${user}/repos`)
}
