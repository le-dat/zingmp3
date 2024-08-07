import { useRef } from "react"
import { useAppDispatch } from "./useRedux"
import { setVolume } from "..//redux/reducers/volumeSlice"

const useVolumeControl = (volume: number) => {
  const dispatch = useAppDispatch()
  const preVolume = useRef<number>(volume || 100)

  const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(Number.parseInt(e.target.value)))
  }

  const handleMute = () => {
    const volumeValue = volume > 0 ? 0 : preVolume.current
    if (volume > 0) {
      preVolume.current = volume
    }
    dispatch(setVolume(volumeValue))
  }

  return { handleChangeVolume, handleMute }
}

export default useVolumeControl
