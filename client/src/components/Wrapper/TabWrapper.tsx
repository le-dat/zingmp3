import clsx from "clsx"
import React from "react"

import style from "./TabWrapper.module.scss"

interface IProps {
  customClass?: string
  children: React.ReactNode
}

const TabWrapper: React.FC<IProps> = ({ customClass, children }) => {
  const className = clsx(style.wrapper, customClass)

  return (
    <nav className={className}>
      <div className={style.header}>{children}</div>
    </nav>
  )
}

export default TabWrapper
