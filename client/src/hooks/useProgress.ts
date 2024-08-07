import { useMemo } from "react"

const useProgress = (audioRef: React.RefObject<HTMLAudioElement>, isSeeking: boolean, processValue: number) => {
  return useMemo(() => {
    if (audioRef.current) {
      const width = isSeeking
        ? processValue
        : Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) || 0
      return width
    }
  }, [isSeeking, processValue])
}

export default useProgress
