import axios from 'axios'
import { ToDoProps } from './types'

export const login = async (url: string, params: object): Promise<any> => {
  const user = await axios.get(url, { params }).then(({ data }) => data)
  
  return user
}

export const fetchTodos = async (url: string): Promise<ToDoProps[]> => {
  const todos = await axios.get(url).then(({ data }) => data)
  
  return todos
}