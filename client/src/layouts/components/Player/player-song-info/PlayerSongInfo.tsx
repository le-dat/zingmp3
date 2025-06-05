import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

import { BtnHeartSong, BtnThreeDotMedia } from "../../../../components/btn-action"
import Image from "../../../../components/Image"
import { SubTitle, Title } from "../../../../components/Info"
import { DETAIL_PLAY_LIST } from "../../../../constants"
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux"
import { setShowLyricSongModal } from "../../../../redux/reducers/lyricSlice"
import style from "./PlayerSongInfo.module.scss"

const PlayerSongInfo: React.FC = () => {
  const dispatch = useAppDispatch()
  const song = useAppSelector((state) => state.song)

  return (
    <div className={style.media}>
      <div className={style.mediaLeft} onClick={() => dispatch(setShowLyricSongModal(true))}>
        <Image src={song.thumbnailM} alt={song.title} className={style.images} />
      </div>

      <div className={style.songCard}>
        <Link to={`/${DETAIL_PLAY_LIST}/${song.album.encodeId}`}>
          <Title title={song.title} hoverMove customClass={style.title} />
        </Link>
        <SubTitle artists={song.artists} hoverColor customClass={style.subtitle} />
      </div>

      <div className={clsx("is-relative-1", style.mediaRight)}>
        <BtnHeartSong customClass={style.icon} song={song} />
        <BtnThreeDotMedia
          customClass={clsx(style.icon, style.iconThreeDot)}
          title={song.title}
          thumbnailM={song.thumbnailM}
          artists={song.artists}
        />
      </div>
    </div>
  )
}

export default PlayerSongInfo
