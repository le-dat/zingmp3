// slider
export interface BannerIProps {
  banner: string
  cover: string
  encodeId: string
  description?: string
}

// card
export interface CardIProps {
  encodeId: string
  title: string
  thumbnailM: string
  textType: string
  name: string
  releaseDate: string
  artists: any[]
  duration: number
}

export interface AlbumIProps {
  encodeId: string
  title: string
  thumbnailM: string
  releaseDate: string
  artists: any[]
  sortDescription: string
  artistsNames: string
}

export interface RadioIProps {
  encodeId: string
  title: string
  thumbnailM: string
  description: string
  activeUsers: string | number
}

export interface MVIProps {
  title: string
  encodeId: string
  thumbnailM: string
  artists: any[]
  thumbnailAvatar: string
}

export interface ArtistIProps {
  link: string
  name: string
  totalFollow: number
  thumbnailM: string
}

// media
export interface MediaIProps {
  encodeId: string
  thumbnailM: string
  title: string
  link?: string
  artists: string[]
  artistsNames?: string
  streamingStatus: number
  duration: number
  album: {
    encodeId: string
  }
}
