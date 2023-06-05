import clsx from "clsx"
import React from "react"
import { BsPlayCircle } from "react-icons/bs"

import { BtnHeartAlbum, BtnThreeDotCard } from "../BtnAction"
import style from "./AlphaCard.module.scss"

interface IProps {
  album?: any
  rounded?: boolean
  customClass: string
}

const AlphaCard: React.FC<IProps> = ({ album, rounded, customClass }) => {
  const className = clsx(
    style.wrapper,
    {
      [style.rounded]: rounded,
    },
    customClass,
  )

  return (
    <div className={className}>
      <div className={clsx("is-center", style.container)}>
        {album && <BtnHeartAlbum customClass={style.icon} album={album} />}
        <BsPlayCircle className={style.iconPlaying} />
        {album && <BtnThreeDotCard customClass={style.icon} />}
      </div>
    </div>
  )
}

export default AlphaCard
