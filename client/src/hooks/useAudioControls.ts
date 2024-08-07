import { useEffect } from "react"

const useAudioControls = (
  audioRef: React.RefObject<HTMLAudioElement>,
  isPlaying: boolean,
  volume: number,
  encodeId: string,
) => {
  useEffect(() => {
    if (isPlaying) audioRef.current?.play()
    else audioRef.current?.pause()
  }, [isPlaying, encodeId])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100
  }, [volume])
}

export default useAudioControls
