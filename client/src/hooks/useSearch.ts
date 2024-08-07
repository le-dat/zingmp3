import { useEffect, useState } from "react"
import useDebounce from "./useDebounce"
import { ArtistIProps, MediaIProps } from "@/interface"
import * as services from "../services"

interface SearchIProps {
  artists: ArtistIProps[]
  songs: MediaIProps[]
}

const useSearch = (searchValue: string) => {
  const [searchResult, setSearchResult] = useState<SearchIProps>({ artists: [], songs: [] })
  const [loading, setLoading] = useState<boolean>(false)
  const debounce = useDebounce({ value: searchValue, delay: 500 })

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult({ artists: [], songs: [] })
      return
    }

    const fetchApi = async () => {
      setLoading(true)
      const res = await services.search(debounce)
      setSearchResult(res)
      setLoading(false)
    }

    fetchApi()
  }, [debounce])

  return { searchResult, loading }
}

export default useSearch
