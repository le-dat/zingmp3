import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

import { DETAIL_PLAY_LIST } from "../../constants"
import { AlphaCard } from "../Alpha"
import Image from "../Image"
import { SubTitle, Title } from "../Info"
import style from "./CardDetail.module.scss"

interface IProps {
  title: string
  encodeId: string
  thumbnailM: string
  textType: string
  releaseDate: string
  artists: any[]
  customClass?: string
}

const CardDetail: React.FC<IProps> = ({ encodeId, title, artists, releaseDate, textType, thumbnailM, customClass }) => {
  return (
    <Link to={`/${DETAIL_PLAY_LIST}/${encodeId}`} className={clsx(style.card, customClass)}>
      <figure className={style.cardTop}>
        <Image className={style.image} src={thumbnailM} />
        {encodeId && <AlphaCard customClass={style.alpha} />}
      </figure>

      <div className={style.cardContent}>
        <SubTitle subTitle={textType} customClass={style.subtitle} lineCamp={1} />
        <Title title={title} customClass={style.title} lineCamp={1} />
        <SubTitle artists={artists} customClass={style.subtitle} lineCamp={2} />
        <SubTitle subTitle={releaseDate} customClass={style.subtitle} lineCamp={1} />
      </div>
    </Link>
  )
}

export default CardDetail
