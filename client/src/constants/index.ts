// router
export const PERSONAL = "my-music"
export const RECENTLY = "history"
export const LIBRARY_SONG = "library/song"
export const LIBRARY_PLAY_LIST = "library/playlist"

export const DISCOVER = "/"
export const ZING_CHART = "zing-chart"
export const ZING_CHART_WEEK = "zing-chart-tuan"
export const RADIO = "radio"
export const FOLLOW = "the-loai-nghe-si"
export const NEW_MUSIC = "moi-phat-hanh"
export const TYPE_MUSIC = "hub"
export const TOP_100 = "top100"
export const MV = "the-loai-video"
export const VIDEO = "video"
export const DETAIL_PLAY_LIST = "detail-playlist"
export const ARTIST = "artist"
export const VIET_NAM = "Viet-Nam"
export const KOREAN = "Han-Quoc"
export const US_UK = "US-UK"
export const INSTRUCMENTAL_MUSIC = "Hoa-Tau"
export const CHINESE_MUSIC = "Hoa-Ngu"

export const LOGIN = "login"
export const SIGN_UP = "signup"
export const UPDATE = "update"
export const NOT_FOUND = "*"
export const ID = ":id"

// storage key
export const PLAYER_STORAGE_KEY = "DAT_PLAYER"

export const API_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_LOCALHOST || "http://localhost:5000"
    : process.env.REACT_APP_BASE_URL || "https://zingmp3-19ul.onrender.com"
