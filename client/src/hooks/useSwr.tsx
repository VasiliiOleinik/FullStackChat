import useSWR from 'swr'
import { UseSwrProps } from './types'

const useSwr = ({ url, fetcher }: UseSwrProps): { data: any, isLoading: boolean, mutate: () => void } => {
  const { data, isLoading, mutate } = useSWR(url, fetcher)

  return { data, isLoading, mutate }
}

export default useSwr