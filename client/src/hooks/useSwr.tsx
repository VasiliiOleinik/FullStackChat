import useSWR from 'swr'
import { UseSwrProps } from './types'

const useSwr = ({ url, fetcher }: UseSwrProps): { data: any, isLoading: boolean } => {
  const { data, isLoading } = useSWR(url, fetcher)

  return { data, isLoading }
}

export default useSwr