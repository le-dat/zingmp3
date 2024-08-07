import clsx from "clsx"
import React from "react"
import { BsPlayCircle } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"

import { useAppSelector } from "../../../../hooks/useRedux"
import style from "./SidebarMenuItem.module.scss"

interface IProps {
  to: string
  title: string
  icon: any
  navLink?: boolean
  onClick?: () => void
}

const SidebarMenuItem: React.FC<IProps> = ({ to = "/", title = "", icon, navLink, onClick = () => {} }) => {
  const { isExpanded } = useAppSelector((state) => state.sidebar)

  const Wrapper: React.FC<{ children: any }> = ({ children }) => {
    if (navLink)
      return (
        <NavLink
          to={to}
          className={({ isActive }) =>
            clsx(style.wrapper, { [style.isExpanded]: isExpanded, [style.active]: isActive })
          }
          onClick={onClick}
        >
          {children}
        </NavLink>
      )
    return (
      <Link to={to} className={clsx(style.wrapper, { [style.isExpanded]: isExpanded })}>
        {children}
      </Link>
    )
  }

  return (
    <Wrapper>
      <div className={style.icon}>{icon}</div>
      <span className={style.title}>{title}</span>
      <BsPlayCircle className={clsx(style.iconPlay, { active: title === "#zingchart" })} />
    </Wrapper>
  )
}

export default SidebarMenuItem
