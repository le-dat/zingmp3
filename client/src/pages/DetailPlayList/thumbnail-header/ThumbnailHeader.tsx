import clsx from "clsx"
import React from "react"

import { AlphaDetailPlayList } from "../../../components/alpha"
import Image from "../../../components/image"
import { useAppSelector } from "../../../hooks/useRedux"
import style from "./ThumbnailHeader.module.scss"

interface IProps {
  thumbnailM: string
}
const ThumbnailHeader: React.FC<IProps> = ({ thumbnailM }) => {
  const { isPlaying } = useAppSelector((state) => state.control)

  return (
    <figure className={clsx("is-center", style.wrapper, { [style.spin]: isPlaying })}>
      <Image src={thumbnailM} className={style.image} />
      {thumbnailM && <AlphaDetailPlayList customClass={style.alpha} />}
    </figure>
  )
}

export default ThumbnailHeader
