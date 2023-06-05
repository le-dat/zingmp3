import axios from "axios"
import { API_URL } from "../constants"

const httpRequestZing = axios.create({
  baseURL: `${API_URL}/api/zing`,
})

export const get = async (path: string, option = {}) => {
  const { data } = await httpRequestZing.get(path, option)
  return data
}

export default httpRequestZing
