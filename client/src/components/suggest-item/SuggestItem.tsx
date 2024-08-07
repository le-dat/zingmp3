import React from "react"
import { Link } from "react-router-dom"

import { DETAIL_PLAY_LIST } from "../../constants"
import { useAppDispatch } from "../../hooks/useRedux"
import { MediaIProps } from "../../interface"
import { setInfoSong } from "../../redux/reducers/songSlice"
import { AlphaMedia } from "../alpha"
import { BtnHeartSong, BtnThreeDotMedia } from "../btn-action"
import Image from "../image"
import { SubTitle, Title } from "../info"
import style from "./SuggestItem.module.scss"

const SuggestItem: React.FC<MediaIProps> = (props) => {
  const dispatch = useAppDispatch()

  return (
    <div className={style.wrapper}>
      <div className={style.media}>
        <div className={style.mediaLeft} onClick={() => dispatch(setInfoSong(props))}>
          <Image src={props.thumbnailM} alt={props.title} className={style.thumbnailM} />
          <AlphaMedia customClass={style.bgHover} />
        </div>

        <div className={style.mediaContent}>
          <Link to={`/${DETAIL_PLAY_LIST}/${props.album.encodeId}`}>
            <Title title={props.title} hoverColor />
          </Link>
          <SubTitle subTitle={props.artistsNames} />
        </div>

        <div className={style.mediaRight}>
          <BtnHeartSong song={props} />
          <BtnThreeDotMedia {...props} tooltip="Khác" {...props} />
        </div>
      </div>
    </div>
  )
}

export default SuggestItem
