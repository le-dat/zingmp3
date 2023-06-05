export const getRandomIndex = (listSong: any[], currentIndex: number) => {
  let newIndex = 0

  do {
    newIndex = Math.floor(Math.random() * listSong.length)
  } while (newIndex === currentIndex)

  return newIndex
}

export const getNewIndex = (listSong: any[], currentIndex: number, director: string) => {
  let newSongIndex

  if (director === "next") {
    newSongIndex = currentIndex + 1 >= listSong.length ? 0 : currentIndex + 1
  } else {
    newSongIndex = currentIndex - 1 < 0 ? listSong.length - 1 : currentIndex - 1
  }

  return newSongIndex
}

export const getArraySongEmpty = (value: number) => {
  return Array(value).fill({
    encodeId: "",
    thumbnailM: "",
    duration: 0,
    title: "",
    artists: [],
    album: { encodeId: "" },
  })
}

export const getArrayPlayListEmpty = (value: number) => {
  return Array(value).fill({
    encodeId: "",
    title: "",
    thumbnailM: "",
    releaseDate: "",
    artists: [],
    sortDescription: "",
    artistsNames: "",
  })
}

export const getArrayVideoEmpty = (value: number) => {
  return Array(value).fill({
    encodeId: "",
    title: "",
    thumbnailM: "",
    textType: "",
    artists: [],
    name: "",
    releaseDate: "",
    duration: 0,
  })
}

export const getArrayArtistEmpty = (value: number) => {
  return Array(value).fill({
    link: "",
    name: "",
    thumbnailM: "",
    totalFollow: 0,
  })
}
export const getArrayRadioEmpty = (value: number) => {
  return Array(value).fill({
    encodeId: "",
    title: "",
    thumbnailM: "",
    description: "",
    activeUsers: "",
  })
}
