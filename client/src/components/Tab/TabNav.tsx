import clsx from "clsx"
import React from "react"
import { NavLink } from "react-router-dom"

import style from "./TabNav.module.scss"

interface IProps {
  to: string
  children: React.ReactNode
  small?: boolean
  customClass?: string
  onClick?: () => void
}

const TabNav: React.FC<IProps> = ({ to, small, children, customClass, onClick }) => {
  return (
    <NavLink
      to={to}
      className={(nav) => clsx(style.link, { [style.active]: nav.isActive, [style.small]: small }, customClass)}
      onClick={onClick}
    >
      {children}
    </NavLink>
  )
}

export default TabNav
