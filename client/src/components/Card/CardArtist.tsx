import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

import images from "../../assets/images"
import { ARTIST } from "../../constants"
import { formatLinkArtist } from "../../utils/common"
import { AlphaCard } from "../alpha"
import { BtnFollow } from "../btn-action"
import Image from "../Image"
import { SubTitle, Title } from "../Info"
import style from "./CardArtist.module.scss"

interface IProps {
  link: string
  name: string
  totalFollow: number
  thumbnailM: string
  customClass?: string
}

const CardArtist: React.FC<IProps> = ({ link, name, totalFollow, thumbnailM = images.noImage, customClass }) => {
  return (
    <div className={clsx(style.card, customClass)}>
      <Link to={`/${ARTIST}${formatLinkArtist(link)}`}>
        <figure className={style.cardTop}>
          <Image className={style.image} rounded src={thumbnailM} />
          {link && <AlphaCard customClass={style.alpha} />}
        </figure>
      </Link>

      <div className={style.cardContent}>
        <Link to={`/${ARTIST}${link}`}>
          <Title title={name} customClass={style.title} hoverColor lineCamp={1} />
        </Link>
        {totalFollow && <SubTitle subTitle={`${totalFollow} quan tâm`} customClass={style.subtitle} lineCamp={2} />}
      </div>

      <BtnFollow disable={link === ""} primary customClass={style.btn} />
    </div>
  )
}

export default CardArtist
