import React from "react"
import { Link } from "react-router-dom"

import { ARTIST } from "../../constants"
import { formatFollower } from "../../utils/common"
import Image from "../Image"
import { SubTitle, Title } from "../Info"
import style from "./SuggestArtist.module.scss"

interface IProps {
  thumbnailM: string
  name: string
  link: string
  totalFollow: number
}
const SuggestArtist: React.FC<IProps> = ({ thumbnailM, name, link, totalFollow }) => {
  return (
    <Link to={`/${ARTIST}${link}`} className={style.wrapper}>
      <div className={style.media}>
        <div className={style.mediaLeft}>
          <Image src={thumbnailM} alt={name} rounded className={style.thumbnailM} />
        </div>

        <div className={style.mediaContent}>
          <Title title={name} />
          <SubTitle subTitle={`Nghệ sĩ, ${formatFollower(totalFollow)} quan tâm`} />
        </div>
      </div>
    </Link>
  )
}

export default SuggestArtist
