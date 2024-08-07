import HeadlessTippy from "@tippyjs/react/headless"
import clsx from "clsx"
import React from "react"

import { ButtonTitle } from "../button"
import { PopperWrapper } from "../Wrapper"
import style from "./Menu.module.scss"

interface MenuIProps {
  data: RenderIProps[]
}
interface RenderIProps {
  title: string
  leftIcon?: JSX.Element
  children?: RenderIProps[]
  rightIcon?: JSX.Element
  to?: string
  separate?: boolean
}
const renderReview = (items: RenderIProps[] = []) => {
  return (
    <div className={style.songInfo} tabIndex={-1}>
      <PopperWrapper customClass={style.songPopper}>
        {items.map((item, index) => (
          <div key={`${item?.title}-${index}`} className={style.item}>
            <ButtonHeadless {...item} />
          </div>
        ))}
      </PopperWrapper>
    </div>
  )
}

const ButtonHeadless: React.FC<RenderIProps> = ({ title, leftIcon, rightIcon, children, to, separate }) => {
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div className={style.btnWrapper}>
      <HeadlessTippy interactive offset={[0, 0]} placement="right-end" render={() => renderReview(children)}>
        <ButtonTitle
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          to={to}
          customClass={clsx({ [style.separate]: separate }, style.button)}
        >
          {title}
        </ButtonTitle>
      </HeadlessTippy>
    </div>
  )
}
const Menu: React.FC<MenuIProps> = ({ data = [] }) => {
  return (
    <div className={style.wrapper}>
      {data.map((item, index) => (
        <div key={`${item?.title}-${index}`} className={style.item}>
          <ButtonHeadless {...item} />
        </div>
      ))}
    </div>
  )
}

export default Menu
