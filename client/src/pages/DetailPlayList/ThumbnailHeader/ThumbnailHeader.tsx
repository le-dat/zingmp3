import clsx from "clsx"
import React from "react"

import { AlphaDetailPlayList } from "../../../components/Alpha"
import Image from "../../../components/Image"
import { useAppSelector } from "../../../hooks/useRedux"
import style from "./ThumbnailHeader.module.scss"

interface IProps {
  thumbnailM: string
}
const ThumbnailHeader: React.FC<IProps> = ({ thumbnailM }) => {
  const { isPlay } = useAppSelector((state) => state.control)

  return (
    <figure className={clsx("is-center", style.wrapper, { [style.spin]: isPlay })}>
      <Image src={thumbnailM} className={style.image} />
      {thumbnailM && <AlphaDetailPlayList customClass={style.alpha} />}
    </figure>
  )
}

export default ThumbnailHeader
