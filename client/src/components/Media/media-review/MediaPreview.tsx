import clsx from "clsx"
import React, { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"

import { useAppSelector } from "../../../hooks/useRedux"
import * as services from "../../../services"
import { formatFollower } from "../../../utils/common"
import { AlphaMedia } from "../../alpha"
import { BtnFollow } from "../../btn-action"
import { CardSong } from "../../card"
import Image from "../../image"
import style from "./MediaPreview.module.scss"

interface SectionItem {
  title: string
  [key: string]: any
}

interface Section {
  items: SectionItem[]
}

interface ArtistInfo {
  thumbnail: string
  thumbnailM: string
  realname: string
  link: string
  totalFollow: number
  follow: number
  sortBiography: string
  biography: string
  sections: Section[]
}

interface Artist {
  alias: string
}

interface MediaPreviewProps {
  artist: Artist
}
const MediaPreview: React.FC<MediaPreviewProps> = ({ artist }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton)
  const [artistInfo, setArtistInfo] = useState<ArtistInfo>({
    thumbnail: "",
    thumbnailM: "",
    realname: "",
    link: "/",
    totalFollow: 0,
    follow: 0,
    sortBiography: "",
    biography: "",
    sections: Array(2).fill({ items: Array(4).fill({}) }),
  })

  useEffect(() => {
    const fetchArtistInfo = async () => {
      const response = await services.getArtist(artist.alias)
      setArtistInfo(response)
    }

    if (artist.alias) fetchArtistInfo()
  }, [artist.alias])

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className={style.content}>
        <div className={style.topContent}>
          <div className={style.media}>
            <div className={style.mediaLeft}>
              <Image className={style.image} src={artistInfo.thumbnailM} fallback={artistInfo.thumbnail} rounded />
              <AlphaMedia rounded customClass={style.bgHover} />
            </div>
            <div className={style.mediaContent}>
              <h3 className={style.title}>
                <Link to={artistInfo.link}>{artistInfo.realname || <Skeleton />}</Link>
              </h3>
              <h3 className={style.subtitle}>{formatFollower(artistInfo.totalFollow || artistInfo.follow)} quan tâm</h3>
            </div>

            <div className={style.mediaRight}>
              <BtnFollow primary />
            </div>
          </div>
        </div>

        <div className={style.bottomContent}>
          <div className={style.sortBiography}>{artistInfo.sortBiography || artistInfo.biography}</div>

          {artistInfo?.sections?.length > 0 && (
            <div className={clsx("grid", style.album)}>
              <h3 className={style.albumTitle}>Moi nhat</h3>

              <div className={clsx("row", style.albumList)}>
                {artistInfo?.sections[1 || 0]?.items.map(
                  (item: any, index: number) =>
                    index < 4 && (
                      <div key={`card-${item?.title}-${index}`} className={clsx("col l-3 m-3", style.albumItem)}>
                        <CardSong {...item} />
                      </div>
                    ),
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default MediaPreview
