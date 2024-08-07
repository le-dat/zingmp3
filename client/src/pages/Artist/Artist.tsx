import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { BtnFollow } from "../../components/btn-action"
import { CardDetail } from "../../components/card"
import HeaderPlayList from "../../components/header-play-list"
import Image from "../../components/image"
import { Paragraph } from "../../components/info"
import { PlayListAlbum, PlayListArtist, PlayListVideo } from "../../components/play-list"
import { useScrollTop } from "../../hooks"
import { CardIProps } from "../../interface"
import * as services from "../../services"
import { formatNumber } from "../../utils/common"
import { getArrayArtistEmpty, getArrayPlayListEmpty, getArraySongEmpty, getArrayVideoEmpty } from "../../utils/song"
import { getToastWarn } from "../../utils/toast"
import { SectionIProps } from "../interface"
import style from "./Artist.module.scss"
import TopListSong from "./top-list-song"

interface IProps {
  alias: string
  biography: string
  birthday: string
  cover: string
  follow: number
  name: string
  realname: string
  playlistId: string
  thumbnailM: string
  topAlbum: CardIProps
  sections: SectionIProps[]
}
const Artist: React.FC = () => {
  useScrollTop()
  const { id } = useParams()
  const [artist, setArtist] = useState<IProps>({
    alias: "",
    biography: "",
    birthday: "",
    cover: "",
    follow: 0,
    name: "",
    realname: "",
    thumbnailM: "",
    playlistId: "",
    topAlbum: {
      encodeId: "",
      thumbnailM: "",
      title: "",
      artists: [],
      name: "",
      releaseDate: "",
      textType: "",
      duration: 0,
    },
    sections: [
      {
        sectionType: "song",
        items: getArraySongEmpty(6),
        title: "",
      },
      {
        sectionType: "playlist",
        items: getArrayPlayListEmpty(4),
        title: "",
      },
      {
        sectionType: "video",
        items: getArrayVideoEmpty(2),
        title: "",
      },
      {
        sectionType: "artist",
        items: getArrayArtistEmpty(4),
        title: "",
      },
    ],
  })

  useEffect(() => {
    const fetchApi = async () => {
      const res = await services.getArtist(id as string)
      setArtist(res)
    }
    fetchApi()
  }, [id])

  const handlePlay = () => {
    getToastWarn({ msg: "Tính năng này chưa hoàn thiện !" })
  }

  return (
    <div className={style.wrapper}>
      <div className={style.hero}>
        <div
          className={style.artistCover}
          style={{ backgroundImage: artist?.cover ? `url(${artist?.cover}` : "none" }}
        />
        <div className={style.information}>
          <HeaderPlayList title={artist?.name} iconPlay large onClick={handlePlay} />
          <div className={style.heroBottom}>
            <span className={style.follow}>{formatNumber(artist?.follow)} người quan tâm</span>
            <BtnFollow outline />
          </div>
        </div>
      </div>

      <div className="grid">
        <div className={clsx("row", style.container)}>
          {artist?.topAlbum && (
            <div className={clsx("col l-4 m-4 c-12")}>
              <HeaderPlayList title="Mới Phát Hành" small customClass={style.title} />
              <CardDetail {...artist.topAlbum} customClass={style.card} />
            </div>
          )}

          {artist.sections.map((item, index) =>
            item.sectionType === "song" ? (
              <div key={`top-song-${index}`} className={`"col ${artist.topAlbum ? "l-8 m-8 c-12" : "l-12 m-12 c-12"}"`}>
                <TopListSong data={item.items} title={item.title} />
              </div>
            ) : item.sectionType === "playlist" ? (
              <div key={`playlist-${index}`} className={"col l-12 m-12 c-12"}>
                <PlayListAlbum data={item.items} title={item.title} />
              </div>
            ) : item.sectionType === "video" ? (
              <div key={`video-${index}`} className={"col l-12 m-12 c-12"}>
                <PlayListVideo data={item.items} title={item.title} />
              </div>
            ) : item.sectionType === "artist" ? (
              <div key={`video-${index}`} className={"col l-12 m-12 c-12"}>
                <PlayListArtist data={item.items} title={item.title} />
              </div>
            ) : null,
          )}
        </div>

        <div className={style.sectionChannel}>
          <HeaderPlayList title={`Về  ${artist.name}`} small />
          <div className="row">
            <div className={clsx("col l-5 m-9 c-12")}>
              <Image src={artist.thumbnailM} className={style.thumbnail} />
            </div>
            <div className={clsx("col l-5 m-9 c-12", style.about)}>
              <Paragraph>{artist.biography}</Paragraph>
              <div className={style.follow}>
                <p className={style.title}>{formatNumber(artist.follow)}</p>
                <p className={style.subTitle}> người quan tâm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist
