import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import LIST_THEME from "../../components/Modal/ModalTheme/data"
import { config, setConfig } from "./../../utils/storage"

interface ThemeIProps {
  themeIndex: number | string
  listThemeIndex: number | string
}
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    listTheme: LIST_THEME,
    listThemeIndex: config?.listThemeIndex ?? 1,
    themeIndex: config?.themeIndex ?? 1,
    isShowThemeModal: false
  },
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeIProps>) {
      const { themeIndex, listThemeIndex } = action.payload
      state.themeIndex = themeIndex
      state.listThemeIndex = listThemeIndex
      setConfig("theme", action.payload)
    },

    setShowThemeModal(state, action: PayloadAction<boolean>) {
      state.isShowThemeModal = action.payload
    }
  }
})

export const {
  actions: { changeTheme, setShowThemeModal },
  reducer
} = themeSlice

export default reducer
