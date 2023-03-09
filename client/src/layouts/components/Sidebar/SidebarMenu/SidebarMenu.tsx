import clsx from "clsx"
import React from "react"

import style from "./SidebarMenu.module.scss"

interface IProps {
  title?: string
  children: React.ReactNode
}
const SidebarMenu: React.FC<IProps> = ({ title, children }) => {
  return (
    <nav className={style.wrapper}>
      {title && <div className={clsx(style.title)}>{title}</div>}
      {children}
    </nav>
  )
}

export default SidebarMenu
