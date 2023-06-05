import clsx from "clsx"
import React from "react"

import style from "./PopperWrapper.module.scss"

interface IProps {
  children: any
  customClass?: string
  onClick?: (e: any) => void
}

const PopperWrapper: React.FC<IProps> = ({ children, customClass, onClick }) => {
  return (
    <div className={clsx(style.wrapper, customClass)} onClick={onClick}>
      {children}
    </div>
  )
}

export default PopperWrapper
