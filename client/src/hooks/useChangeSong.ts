import { setSongIndex } from "../redux/reducers/playListSlice";
import { setInfoSong } from "../redux/reducers/songSlice";
import { getNewIndex, getRandomIndex } from "../utils/song";
import { useAppDispatch, useAppSelector } from "./useRedux";

const useChangeSong = () => {
  const dispatch = useAppDispatch();
  const { isRandom } = useAppSelector((state) => state.control);
  const { songIndex, playListSong } = useAppSelector((state) => state.playList);

  const handleChangeSong = (direction: string) => {
    let newSongIndex;
    if (isRandom) {
      newSongIndex = getRandomIndex(playListSong, songIndex);
    } else {
      newSongIndex = getNewIndex(playListSong, songIndex, direction);
    }

    dispatch(setSongIndex(newSongIndex));
    const { encodeId, thumbnailM, title, artists, duration, album, streamingStatus } = playListSong[newSongIndex];
    dispatch(setInfoSong({ encodeId, thumbnailM, title, artists, duration, album, streamingStatus }));
  };

  return handleChangeSong;
};

export default useChangeSong;
