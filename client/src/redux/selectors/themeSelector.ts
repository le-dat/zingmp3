import { RootState } from "./../store";
import { createSelector } from "@reduxjs/toolkit";

const selectListTheme = (state: RootState) => state.theme.listTheme;
const selectListThemeIndex = (state: RootState) => state.theme.listThemeIndex;
const selectThemeIndex = (state: RootState) => state.theme.themeIndex;

export const currentThemeSelector = createSelector(
  selectListTheme,
  selectListThemeIndex,
  selectThemeIndex,
  (listTheme, listThemeIndex, themeIndex) => listTheme[listThemeIndex].items[themeIndex]
);
