import { configureStore } from "@reduxjs/toolkit"

import controlReducer from "./reducers/controlSlice"
import currentTimeReducer from "./reducers/currentTimeSlice"
import lyricReducer from "./reducers/lyricSlice"
import personalReducer from "./reducers/personalSlice"
import playListReducer from "./reducers/playListSlice"
import sidebarReducer from "./reducers/sidebarSlice"
import skeletonReducer from "./reducers/skeletonSlice"
import songReducer from "./reducers/songSlice"
import themeReducer from "./reducers/themeSlice"
import volumeReducer from "./reducers/volumeSlice"

export const store = configureStore({
  reducer: {
    control: controlReducer,
    currentTime: currentTimeReducer,
    lyric: lyricReducer,
    personal: personalReducer,
    playList: playListReducer,
    sidebar: sidebarReducer,
    skeleton: skeletonReducer,
    song: songReducer,
    theme: themeReducer,
    volume: volumeReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
