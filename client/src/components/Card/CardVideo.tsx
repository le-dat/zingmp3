import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

import { MV, VIDEO } from "../../constants"
import { AlphaCard } from "../Alpha"
import Image from "../Image"
import { SubTitle, Title } from "../Info"
import Time from "../Time"
import style from "./CardVideo.module.scss"

interface IProps {
  title: string
  encodeId: string
  thumbnailM: string
  artists: any[]
  duration: number
  customClass?: string
}
const CardVideo: React.FC<IProps> = ({ encodeId, title, thumbnailM, artists, duration, customClass }) => {
  return (
    <div className={clsx(style.card, customClass)}>
      <Link to={encodeId ? `/${VIDEO}/${encodeId}` : "/"}>
        <figure className={style.cardTop}>
          <Image className={style.thumbnailM} src={thumbnailM} />
          {encodeId && <AlphaCard customClass={style.alpha} />}

          {duration && (
            <div className={style.time}>
              <Time duration={duration} />
            </div>
          )}
        </figure>
      </Link>

      <div className={style.cardContent}>
        <Link to={`${MV}/${encodeId}`} className={style.left}>
          <Image rounded className={style.image} src={artists?.[0]?.thumbnail} />
        </Link>
        <div className={style.right}>
          <Title title={title} customClass={style.title} lineCamp={1} hoverColor />
          <SubTitle artists={artists} customClass={style.subtitle} lineCamp={1} />
        </div>
      </div>
    </div>
  )
}

export default CardVideo
