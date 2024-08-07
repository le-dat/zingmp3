import clsx from "clsx"
import React from "react"
import { BsCheckCircleFill } from "react-icons/bs"

import { AlphaTheme } from "../../alpha"
import Image from "../../image"
import style from "./ThemeItem.module.scss"

interface IProps {
  themeThumb: any
  className: string
  title: string
  listThemeIndex: number
  themeIndex: number
  active: boolean
}

const ThemeItem: React.FC<IProps> = ({ themeThumb, title, listThemeIndex, themeIndex, active }) => {
  return (
    <div className={clsx(style.wrapper, { [style.active]: active })}>
      <div className={clsx("is-relative-1 ", style.thumb)}>
        <Image src={themeThumb} className={style.image} />
        <AlphaTheme listThemeIndex={listThemeIndex} themeIndex={themeIndex} customClass={style.alpha} />
        <BsCheckCircleFill className={style.icon} />
      </div>
      <h4 className={style.title}>{title}</h4>
    </div>
  )
}

export default ThemeItem
