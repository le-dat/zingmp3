import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export const lyricSlice = createSlice({
  name: "lyric",
  initialState: {
    isLyric: false,
    isShowLyricSongModal: false,
  },
  reducers: {
    setIsLyricSong(state, action: PayloadAction<boolean>) {
      state.isLyric = action.payload
    },
    setShowLyricSongModal(state, action: PayloadAction<boolean>) {
      state.isShowLyricSongModal = action.payload
    },
  },
})

export const { setIsLyricSong, setShowLyricSongModal } = lyricSlice.actions
export default lyricSlice.reducer
