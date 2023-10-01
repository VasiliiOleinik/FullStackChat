export type UseSwrProps = {
  url: string | null
  fetcher: (url: string) => void 
}