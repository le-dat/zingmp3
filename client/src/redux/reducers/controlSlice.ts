import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { config, setConfig } from "../../utils/storage"

const initialState = {
  isPlaying: false,
  isRandom: config?.random || false,
  isLooping: config?.loop || false,
  isLoading: false,
  isFirstMounting: false,
}

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    setRandom: (state, action: PayloadAction<boolean>) => {
      state.isRandom = action.payload
      setConfig("random", action.payload)
    },
    setLooping: (state, action: PayloadAction<boolean>) => {
      state.isLooping = action.payload
      setConfig("loop", action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setFirstMounting: (state, action: PayloadAction<boolean>) => {
      state.isFirstMounting = action.payload
    },
  },
})

export const { setPlaying, setRandom, setLooping, setLoading, setFirstMounting } = controlSlice.actions
export default controlSlice.reducer
