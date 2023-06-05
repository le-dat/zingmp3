import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { config, setConfig } from "../../utils/storage"

export const volumeSlice = createSlice({
  name: "volume",
  initialState: {
    volume: config?.volume || 100,
  },
  reducers: {
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
      setConfig("volume", action.payload)
    },
  },
})
export const { setVolume } = volumeSlice.actions
export default volumeSlice.reducer
