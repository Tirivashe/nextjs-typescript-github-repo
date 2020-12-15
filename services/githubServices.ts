import axios, { AxiosRequestConfig } from 'axios'
import { axiosGetCancellable } from '../helpers/axios.helper'


const config: AxiosRequestConfig = {
  baseURL: 'https://api.github.com',
  auth: {
    username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
    password: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!
  }
}

export function searchRepos(searchText: string, language?: string){
  const query = language ? `${searchText}+language:${language}` : searchText

  if(isServer()){
    return axios.get(`search/repositories?q=${searchText}`, config)
  }

  return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`)
}

const isServer = () => {
  return typeof window === "undefined"
}