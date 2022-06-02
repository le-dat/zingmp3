import { createSlice } from "@reduxjs/toolkit";
export const followReducer = createSlice({
  name: "theodoi",
  initialState: {
    artist: {
      name: "",
      sortBiography: "",
      thumbnail: "",
      thumbnailM: "",
      awards: [],
      birthday: "",
      national: "",
      realName: "",
      follow: 0,
      totalFollow: 0,
      sections: [{ items: [] }],
    },
    loading: true,
  },
  reducers: {
    setArtist: (state, action) => {
      state.artist.name = action.payload.name;
      state.artist.sortBiography = action.payload.sortBiography;
      state.artist.thumbnail = action.payload.thumbnail;
      state.artist.thumbnailM = action.payload.thumbnailM;
      state.artist.awards = action.payload.awards;
      state.artist.birthday = action.payload.birthday;
      state.artist.national = action.payload.national;
      state.artist.realName = action.payload.realname;
      state.artist.follow = action.payload.follow;
      state.artist.totalFollow = action.payload.totalFollow;
      state.artist.sections = action.payload.sections;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.artist.name = "";
      state.artist.sortBiography = "";
      state.artist.thumbnail = "";
      state.artist.thumbnailM = "";
      state.artist.awards = [];
      state.artist.birthday = "";
      state.artist.national = "";
      state.artist.realName = "";
      state.artist.follow = 0;
      state.artist.totalFollow = 0;
      state.loading = true;
    },
  },
});
export const { setArtist, setLoading } = followReducer.actions;
export default followReducer.reducer;
