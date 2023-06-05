import * as httpRequestUser from "../request/httpRequestUser"
import * as httpRequestZing from "../request/httpRequestZing"
import { getToastError } from "../utils/toast"

export interface IProps {
  id: string
  page: string | number
  count: string | number
}

// user
export const getLikedSong = async (email: string) => {
  try {
    const res = await httpRequestUser.get(`/liked/song/${email}`)
    return res
  } catch (error) {
    console.log(error)
  }
}
export const getLikedAlbum = async (email: string) => {
  try {
    const res = await httpRequestUser.get(`/liked/album/${email}`)
    return res
  } catch (error) {
    console.log(error)
  }
}
export const addLikedSong = async (email: string, song: any) => {
  try {
    const res = await httpRequestUser.post(`/liked/song/add`, { email, song })
    return res
  } catch (error) {
    console.log(error)
  }
}
export const addLikedAlbum = async (email: string, album: any) => {
  try {
    const res = await httpRequestUser.post(`/liked/album/add`, { email, album })
    return res
  } catch (error) {
    console.log(error)
  }
}
export const removeLikedSong = async (email: string, songId: string) => {
  try {
    const res = await httpRequestUser.put(`/liked/song/remove`, { email, songId })
    return res
  } catch (error) {
    console.log(error)
  }
}
export const removeLikedAlbum = async (email: string, albumId: string) => {
  try {
    const res = await httpRequestUser.put(`/liked/album/remove`, { email, albumId })
    return res
  } catch (error) {
    console.log(error)
  }
}

// zing
export const getSong = async (id: string) => {
  try {
    const { data } = await httpRequestZing.get("/song", { params: { id } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được bài hát" })
  }
}

// get album
export const getDetailPlayList = async (id: string) => {
  try {
    const { data } = await httpRequestZing.get("/detail-playlist", { params: { id } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được playlist" })
  }
}

// Discover page
export const getHome = async () => {
  try {
    const { data } = await httpRequestZing.get("/home")
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được trang" })
  }
}

// Top100 page
export const getTop100 = async () => {
  try {
    const { data } = await httpRequestZing.get("/top100")
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được trang" })
  }
}

// ZingChart page
export const getChartHome = async () => {
  try {
    const { data } = await httpRequestZing.get("/chart-home")
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được trang" })
  }
}

// music new page
export const getNewReleaseChart = async () => {
  try {
    const { data } = await httpRequestZing.get("/new-release-chart")
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được trang" })
  }
}

export const getSongInfo = async (id: string) => {
  try {
    const { data } = await httpRequestZing.get("/song-info", { params: { id } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được bài hát" })
  }
}

// media artist review
export const getArtist = async (name: string) => {
  try {
    const { data } = await httpRequestZing.get("/artist", { params: { name } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được nghệ sĩ" })
  }
}
export const getListArtistSong = async ({ id, page, count }: IProps) => {
  try {
    const { data } = await httpRequestZing.get("/artist-list-song", { params: { id, page, count } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được bài hát của ca sĩ" })
  }
}

export const getLyric = async (id: string) => {
  try {
    const { data } = await httpRequestZing.get("/lyric", { params: { id } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được lời bài hát" })
  }
}

// Search
export const search = async (keyword: string) => {
  try {
    const res = await httpRequestZing.get("/search", {
      params: { keyword },
    })
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được bài hát" })
  }
}

// MV page
export const getListMV = async ({ id = "IWZ9Z08I", page = 1, count = 15 }: IProps) => {
  try {
    const { data } = await httpRequestZing.get("/list-mv", { params: { id, page, count } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được mv" })
  }
}
export const getCategoryMV = async (id: string) => {
  try {
    const { data } = await httpRequestZing.get("/category-mv", { params: { id } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được list mv" })
  }
}

export const getVideo = async (id: string) => {
  try {
    const { data } = await httpRequestZing.get("/video", { params: { id } })
    return data
  } catch (error) {
    console.log(error)
    getToastError({ msg: "Không tải được video" })
  }
}
