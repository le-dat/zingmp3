import { useEffect, useState } from "react"

interface UseDebounceProps {
  value: string
  delay?: number
}

const useDebounce = ({ value, delay = 500 }: UseDebounceProps): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>("")

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [delay, value])

  return debouncedValue
}

export default useDebounce
