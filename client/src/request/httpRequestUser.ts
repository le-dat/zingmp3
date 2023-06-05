import axios from "axios"
import { API_URL } from "./../constants"

const httpRequestUser = axios.create({
  baseURL: `${API_URL}/api/user`,
})

export const get = async (path: string, option = {}) => {
  const { data } = await httpRequestUser.get(path, option)
  return data
}

export const post = async (path: string, option = {}) => {
  const { data } = await httpRequestUser.post(path, option)
  return data
}

export const put = async (path: string, option = {}) => {
  const { data } = await httpRequestUser.put(path, option)
  return data
}

export default httpRequestUser
