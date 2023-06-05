import clsx from "clsx"
import React from "react"

import style from "./TabButton.module.scss"

interface IProps {
  title: string
  active?: boolean
  disable?: boolean
  onClick?: () => void
  customClass?: string
}

const TabButton: React.FC<IProps> = ({ title, active, disable, onClick, customClass }) => {
  const className = clsx(style.wrapper, { [style.active]: active, [style.disable]: disable }, customClass)

  return (
    <div className={className} onClick={onClick}>
      {title}
    </div>
  )
}

export default TabButton
