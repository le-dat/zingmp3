import { DETAIL_PLAY_LIST } from "./../constants/index"

export const formatFollower = (follow: number = 0): string => {
  if (follow < 1000) {
    return follow + " "
  } else if (follow < 1000000) {
    return (follow / 1000).toFixed(0) + "K "
  } else if (follow < 1000000000) {
    return (follow / 1000000).toFixed(1) + "M "
  } else {
    return (follow / 1000000000).toFixed(1) + "B "
  }
}

export const formatNumber = (number: number = 0): string => {
  return new Intl.NumberFormat("de-DE").format(number)
}

export const formatLinkArtist = (link: string): string => {
  return link.startsWith("/nghe-si") ? link.slice(8) : link
}

export const formatLinkBanner = (link: string): string => {
  return link.startsWith("I") ? "" : `/${DETAIL_PLAY_LIST}/${link}`
}

export const getRandom = (length: number = 0): number => {
  return Math.floor(Math.random() * length)
}

export const getTypeTab: { [key: string]: string } = {
  vn: "VIỆT NAM",
  us: "US-UK",
  kr: "K-POP",
  default: "HÒA TẤU",
}
