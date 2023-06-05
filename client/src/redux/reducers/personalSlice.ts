import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AlbumIProps, MediaIProps } from "../../interface"

interface IProps {
  playListLikedSong: MediaIProps[]
  playListLikedAlbum: AlbumIProps[]
}
const initialState: IProps = {
  playListLikedSong: [],
  playListLikedAlbum: [],
}
export const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    setPlayListLikedSong: (state, action: PayloadAction<MediaIProps[]>) => {
      state.playListLikedSong = action.payload
    },
    setPlayListLikedAlbum: (state, action: PayloadAction<AlbumIProps[]>) => {
      state.playListLikedAlbum = action.payload
    },
  },
})
export const { setPlayListLikedSong, setPlayListLikedAlbum } = personalSlice.actions
export default personalSlice.reducer
