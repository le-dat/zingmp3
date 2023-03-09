import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config, setConfig } from "../../utils/storage";

export const currentTimeSlice = createSlice({
  name: "currentTime",
  initialState: {
    currentTime: config?.currentTime || 0
  },
  reducers: {
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
      setConfig("currentTime", action.payload);
    }
  }
});
export const { setCurrentTime } = currentTimeSlice.actions;
export default currentTimeSlice.reducer;
