import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { config, setConfig } from "./../../utils/storage"

interface IProps {
  encodeId: string
  thumbnailM: string
  title: string
  artists: string[]
  duration: number
  streamingStatus: number
  album: {
    encodeId: string
  }
}
export const songSlice = createSlice({
  name: "song",
  initialState: config?.song || {
    encodeId: "",
    thumbnailM: "",
    title: "",
    artists: [""],
    duration: 0,
    streamingStatus: 1,
    album: {
      encodeId: "",
    },
    source: "",
  },
  reducers: {
    setInfoSong: (state, action: PayloadAction<IProps>) => {
      const { encodeId, thumbnailM, title, artists, duration, album, streamingStatus } = action.payload
      state.encodeId = encodeId
      state.thumbnailM = thumbnailM
      state.title = title
      state.artists = artists
      state.duration = duration
      state.streamingStatus = streamingStatus
      state.album.encodeId = album.encodeId
      setConfig("song", action.payload)
    },
    setSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload
    },
  },
})
export const { setInfoSong, setSource } = songSlice.actions
export default songSlice.reducer
