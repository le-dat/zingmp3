import HeadlessTippy from "@tippyjs/react/headless"
import clsx from "clsx"
import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"

import { ARTIST } from "../../constants"
import { useAppSelector } from "../../hooks/useRedux"
import { formatLinkArtist } from "../../utils/common"
import MediaReview from "../Media/MediaReview"
import { PopperWrapper } from "../Wrapper"
import style from "./SubTitle.module.scss"

interface IProps {
  subTitle?: string | number
  artists?: any[]
  hoverColor?: boolean
  lineCamp?: number
  customClass?: string
}

const renderReview = (artist: { alias: string }) => {
  return (
    <div className={style.songInfo} tabIndex={-1}>
      <PopperWrapper customClass={style.songPopper}>
        <MediaReview artist={artist} />
      </PopperWrapper>
    </div>
  )
}
const renderArtistReview = (artists: any[]) => {
  return artists?.map((artist, i) => (
    <span key={`${artist?.id}-${i}`}>
      <HeadlessTippy
        interactive
        offset={[0, 0]}
        placement="top-start"
        delay={[500, 0]}
        render={() => renderReview(artist)}
      >
        <Link to={`/${ARTIST}${formatLinkArtist(artist?.link as string)}`}>
          {artist?.name}
          {artists.length - 1 !== i ? ", " : ""}
        </Link>
      </HeadlessTippy>
    </span>
  ))
}

const SubTitle: React.FC<IProps> = ({ subTitle, artists, hoverColor, lineCamp = 1, customClass }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton)
  const className = clsx(style.subTitle, `lineCamp-${lineCamp}`, { [style.hoverColor]: hoverColor }, customClass)

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <h3 className={className}>
        {subTitle && artists ? (
          <>{subTitle + " " + renderArtistReview(artists)}</>
        ) : subTitle ? (
          subTitle
        ) : artists?.length ? (
          renderArtistReview(artists)
        ) : (
          <Skeleton height={12 * lineCamp} />
        )}
      </h3>
    </SkeletonTheme>
  )
}

export default SubTitle
