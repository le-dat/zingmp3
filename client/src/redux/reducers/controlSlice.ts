import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { config, setConfig } from "./../../utils/storage"

export const controlSlice = createSlice({
  name: "control",
  initialState: {
    isPlay: false,
    isRandom: config?.random || false,
    isLoop: config?.loop || false,
    isLoading: false,
    firstMounting: false,
  },
  reducers: {
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload
    },
    setRandom: (state, action: PayloadAction<boolean>) => {
      state.isRandom = action.payload
      setConfig("random", action.payload)
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.isLoop = action.payload
      setConfig("loop", action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setFirstMounting: (state, action: PayloadAction<boolean>) => {
      state.firstMounting = action.payload
    },
  },
})
export const { setPlay, setRandom, setLoop, setLoading, setFirstMounting } = controlSlice.actions
export default controlSlice.reducer
