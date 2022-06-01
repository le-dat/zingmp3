import { createSlice } from "@reduxjs/toolkit";
import { setConfig, config } from "../../localStorage/localStorage";

export const songReducer = createSlice({
  name: "song",
  initialState: {
    songId: config.songId || "ZZA07BED",
    songUrl: config.songUrl || "",
    thumbnail:
      config.thumbnail ||
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/8/0/7/1807c6b5fcc7058a14e1a288801221c7.jpg",
    thumbnailM:
      config.thumbnailM ||
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/8/0/7/1807c6b5fcc7058a14e1a288801221c7.jpg",
    title: config.title || "Sau Lưng Anh Có Ai Kìa",
    artistsNames: config.artistsNames || "Thiều Bảo Trâm",
    loading: config.loading || false,
    duration: config.duration || 303,
    album: config.album || "",
    lyric: config.lyric || [],

    isRandom: config.isRandom || false,
    isRepeat: config.isRepeat || false,
    albumPlayList: config.albumPlayList || [],
  },
  reducers: {
    createSong: (state, action) => {
      state.songId = action.payload.encodeId;
      state.thumbnail = action.payload.thumbnail;
      state.thumbnailM = action.payload.thumbnailM;
      state.title = action.payload.title;
      state.artistsNames = action.payload.artistsNames;
      state.duration = action.payload.duration;
      state.album = action.payload.album;
      state.loading = false;

      setConfig("songId", action.payload.encodeId);
      setConfig("thumbnail", action.payload.thumbnail);
      setConfig("thumbnailM", action.payload.thumbnailM);
      setConfig("title", action.payload.title);
      setConfig("artistsNames", action.payload.artistsNames);
      setConfig("duration", action.payload.duration);
      setConfig("album", action.payload.album);
    },
    renderSong: (state, action) => {
      state.songUrl = action.payload;
      state.loading = false;

      setConfig("songUrl", action.payload.songUrl);
    },
    setLoading: (state, action) => {
      state.loading = true;
    },
    renderLyrics: (state, action) => {
      state.lyric = action.payload;
      setConfig("lyric", action.payload);
    },
    setRandom: (state, action) => {
      state.isRandom = action.payload;
      setConfig("isRandom", action.payload);
    },
    setRepeat: (state, action) => {
      state.isRepeat = action.payload;
      setConfig("isRepeat", action.payload);
    },
    renderAlbumPlayList: (state, action) => {
      state.albumPlayList = action.payload;
      setConfig("albumPlayList", action.payload);
    },
  },
});
export const {
  createSong,
  renderSong,
  setLoading,
  renderLyrics,
  renderAlbumPlayList,
  setRandom,
  setRepeat,
} = songReducer.actions;
export default songReducer.reducer;
