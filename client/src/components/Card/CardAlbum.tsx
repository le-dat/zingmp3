import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

import { DETAIL_PLAY_LIST } from "../../constants"
import { AlphaCard } from "../Alpha"
import Image from "../Image"
import { SubTitle, Title } from "../Info"
import style from "./CardAlbum.module.scss"

interface IProps {
  encodeId: string
  title: string
  thumbnailM: string
  subTitle?: string | number
  customClass?: string
}

const CardAlbum: React.FC<IProps> = ({ encodeId, title, thumbnailM, subTitle, customClass }) => {
  const album = { encodeId, title, thumbnailM, subTitle }

  return (
    <div className={clsx(style.card, customClass)}>
      <Link to={`/${DETAIL_PLAY_LIST}/${encodeId}`} className={style.cardTop}>
        <Image className={style.image} src={thumbnailM} />
        {encodeId && <AlphaCard customClass={style.alpha} album={album} />}
      </Link>

      <div className={style.cardContent}>
        <Link to={`/${DETAIL_PLAY_LIST}/${encodeId}`}>
          <Title title={title} customClass={style.title} hoverColor lineCamp={1} />
        </Link>
        {subTitle && <SubTitle subTitle={subTitle} customClass={style.subtitle} lineCamp={2} />}
      </div>
    </div>
  )
}

export default CardAlbum
