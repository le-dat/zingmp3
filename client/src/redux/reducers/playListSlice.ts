import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface SongIProps {
  encodeId: string
  thumbnailM: string
  title: string
  artists: any[]
  duration: number
  album: {
    encodeId: string
  }
}
export const playListSlice = createSlice({
  name: "playListSong",
  initialState: {
    songIndex: 0,
    playListSong: Array(10).fill({
      encodeId: "",
      thumbnailM: "",
      title: "",
      artists: [],
      duration: 0,
      album: { encodeId: "" },
    }),
    isShowPlayListModal: false,
  },
  reducers: {
    setSongIndex: (state, action: PayloadAction<number>) => {
      state.songIndex = action.payload
    },
    setPlayList: (state, action: PayloadAction<SongIProps[]>) => {
      state.playListSong = action.payload
    },
    setShowPlayListModal: (state, action: PayloadAction<boolean>) => {
      state.isShowPlayListModal = action.payload
    },
  },
})
export const { setSongIndex, setPlayList, setShowPlayListModal } = playListSlice.actions
export default playListSlice.reducer
