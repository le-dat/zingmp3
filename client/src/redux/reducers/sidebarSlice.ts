import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isExpanded: false,
  },
  reducers: {
    setExpanded: (state, action: PayloadAction<boolean>) => {
      state.isExpanded = action.payload
    },
  },
})
export const { setExpanded } = sidebarSlice.actions
export default sidebarSlice.reducer
