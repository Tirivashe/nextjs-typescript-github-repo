import axios, { AxiosRequestConfig } from "axios"
import { NextApiRequest, NextApiResponse } from 'next'

const config: AxiosRequestConfig = {
  baseURL: 'https://api.github.com',
  auth: {
    username: process.env.GITHUB_CLIENT_ID!,
    password: process.env.GITHUB_CLIENT_SECRET!
  }
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {q, sort, order} = req.query
  const response = await axios.get(`search/repositories?q=${q}&sort=${sort}&order=${order}`, config)
  return res.json(response.data)
}