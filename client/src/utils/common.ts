import { DETAIL_PLAY_LIST } from "./../constants/index"

export const formatFollower = (follow: number = 0) => {
  if (follow < 1000) {
    return follow + " "
  } else if (follow < 1000000) {
    return (follow / 1000).toFixed(0) + "K "
  } else if (follow < 1000000000) {
    return (follow / 1000000).toFixed(1) + "M "
  }
}

export const formatNumber = (number: number = 0) => {
  return new Intl.NumberFormat("de-DE").format(number)
}

export const formatLinkArtist = (link: string) => {
  return link.toString().startsWith("/nghe-si") ? link.slice(8) : link
}

export const formatLinkBanner = (link: string) => {
  return link.startsWith("I") ? "" : `/${DETAIL_PLAY_LIST}/${link}`
}

export const getRandom = (length: number = 0) => {
  return Math.floor(Math.random() * length)
}

export const getTypeTab = (type: string = "") => {
  if (type === "vn") return "VIỆT NAM"
  else if (type === "us") return "US-UK"
  else if (type === "korea") return "K-POP"
  return "HÒA TẤU"
}
