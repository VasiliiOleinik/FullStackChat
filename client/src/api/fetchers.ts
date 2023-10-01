import axios from 'axios'

export const login = async (url: string, params: object): Promise<any> => {
  const user = await axios.get(url, { params }).then(({ data }) => data)

  console.log('user', user)
  
  return user
}