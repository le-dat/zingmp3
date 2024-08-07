import clsx from "clsx"
import React from "react"
import { BsPlayFill } from "react-icons/bs"

import style from "./HeaderPlayList.module.scss"

export interface IProps {
  title: string
  iconPlay?: boolean
  small?: boolean
  large?: boolean
  to?: string
  customClass?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const HeaderPlayList: React.FC<IProps> = ({ title, iconPlay, small, large, customClass, onClick }) => {
  const className: string = clsx(style.header, { [style.small]: small, [style.large]: large }, customClass)

  return (
    <div className={className}>
      <h3 className={style.title}>{title}</h3>
      {iconPlay && (
        <button className={style.icon} onClick={onClick}>
          <BsPlayFill />
        </button>
      )}
    </div>
  )
}

export default HeaderPlayList
