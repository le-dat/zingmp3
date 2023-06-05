import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export const skeletonSlice = createSlice({
  name: "skeleton",
  initialState: {
    baseColor: "var(--color-bg-alpha)",
    highlightColor: "var(--color-item-hover)",
  },
  reducers: {
    setThemeSkeleton: (state, action: PayloadAction<string>) => {
      state.baseColor = action.payload
      state.highlightColor = action.payload
    },
  },
})

export const { setThemeSkeleton } = skeletonSlice.actions
export default skeletonSlice.reducer
