import { setSongIndex } from "../redux/reducers/playListSlice"
import { setInfoSong } from "../redux/reducers/songSlice"
import { getNewIndex, getRandomIndex } from "../utils/song"
import { useAppDispatch, useAppSelector } from "./useRedux"

const useChangeSong = () => {
  const dispatch = useAppDispatch()
  const { isRandom } = useAppSelector((state) => state.control)
  const { songIndex, playListSong } = useAppSelector((state) => state.playList)

  const determineNewSongIndex = (direction: string) => {
    return isRandom ? getRandomIndex(playListSong, songIndex) : getNewIndex(playListSong, songIndex, direction)
  }

  const updateSongInfo = (newSongIndex: number) => {
    const { encodeId, thumbnailM, title, artists, duration, album, streamingStatus } = playListSong[newSongIndex]
    dispatch(setInfoSong({ encodeId, thumbnailM, title, artists, duration, album, streamingStatus }))
  }

  const handleChangeSong = (direction: string) => {
    const newSongIndex = determineNewSongIndex(direction)
    dispatch(setSongIndex(newSongIndex))
    updateSongInfo(newSongIndex)
  }

  return handleChangeSong
}

export default useChangeSong
