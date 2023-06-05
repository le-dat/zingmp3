/* eslint-disable react/display-name */
import Tippy from "@tippyjs/react"
import clsx from "clsx"
import React from "react"

import style from "./ButtonIcon.module.scss"
import { IconType } from "react-icons"

export interface IProps {
  icon?: any
  title?: string
  backgroundLarge?: boolean
  backgroundSmall?: boolean
  rounded?: boolean
  disable?: boolean
  active?: boolean
  customClass?: string
  onClick?: () => void
}

const ButtonIcon: React.FC<IProps> = ({
  icon,
  title,
  backgroundLarge,
  backgroundSmall,
  rounded,
  disable,
  active,
  customClass,
  onClick,
}) => {
  const props = {
    onClick,
  }
  if (disable && onClick) {
    delete props.onClick
  }

  const className = clsx(
    style.button,
    {
      [style.backgroundLarge]: backgroundLarge,
      [style.backgroundSmall]: backgroundSmall,
      [style.rounded]: rounded,
      [style.active]: active,
      [style.disable]: disable,
    },
    customClass,
  )

  const ToolTip: React.FC<{ children: any }> = ({ children }) => {
    if (title) {
      return (
        <span>
          <Tippy content={<span className={style.tooltip}>{title}</span>}>{children}</Tippy>
        </span>
      )
    }
    return children
  }

  return (
    <ToolTip>
      <button className={className} {...props}>
        {icon && <div className={style.icon}>{icon}</div>}
      </button>
    </ToolTip>
  )
}
export default ButtonIcon
