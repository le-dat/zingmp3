import React from "react"

import Image from "../Image"
import style from "./AlphaPage.module.scss"

interface IProps {
  src: string
  alt?: string
  customClass?: string
}
const AlphaPage: React.FC<IProps> = ({ src, alt = "", customClass = "" }) => {
  return (
    <div className={customClass}>
      <Image className={style.image} src={src} alt={alt} />
      <div className={style.bgBlur} />
      <div className={style.bgAlpha} />
    </div>
  )
}

export default AlphaPage
