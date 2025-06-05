import clsx from "clsx"
import React from "react"

import images from "../../assets/images"
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import { setPlaying } from "../../redux/reducers/controlSlice"
import { IconLoading } from "../Icons"
import Image from "../Image"
import style from "./AlphaMedia.module.scss"

interface IProps {
  rounded?: boolean
  playing?: boolean
  customClass: string
}

const AlphaMedia: React.FC<IProps> = ({ rounded, playing, customClass }) => {
  const dispatch = useAppDispatch()
  const { isPlaying, isLoading } = useAppSelector((state) => state.control)
  const className = clsx(style.wrapper, { [style.rounded]: rounded }, customClass)

  const handlePlay = () => {
    dispatch(setPlaying(!isPlaying))
  }
  return (
    <div className={className}>
      <figure className={"is-center is-relative-1"} onClick={handlePlay}>
        {isLoading && playing ? (
          <IconLoading className={style.iconLoading} />
        ) : isPlaying && playing ? (
          <Image src={images.icon.playing} className={style.iconAudio} />
        ) : (
          <Image src={images.icon.play} className={style.iconPlay} />
        )}
      </figure>
    </div>
  )
}

export default AlphaMedia
