/* eslint-disable react/display-name */
import clsx from "clsx"
import React, { forwardRef, useRef } from "react"
import { Link } from "react-router-dom"

import style from "./ButtonTitle.module.scss"

interface IProps {
  to?: string
  href?: string
  primary?: boolean
  outline?: boolean
  rounded?: boolean
  small?: boolean
  disable?: boolean
  large?: boolean
  vertical?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
  customClass?: string
}

const ButtonTitle = forwardRef<HTMLButtonElement | HTMLAnchorElement, IProps>(
  (
    {
      to,
      href,
      primary,
      outline,
      rounded,
      small,
      large,
      leftIcon,
      rightIcon,
      disable,
      vertical,
      children,
      customClass,
      onClick,
    },
    ref,
  ) => {
    const buttonRef = useRef(ref)
    let Component: React.ElementType = "button"
    const className = clsx(
      "is-center",
      style.button,
      {
        [style.primary]: primary,
        [style.outline]: outline,
        [style.rounded]: rounded,
        [style.small]: small,
        [style.large]: large,
        [style.disable]: disable,
        [style.vertical]: vertical,
      },
      customClass,
    )

    const props: Record<string, any> = { onClick }

    if (to) {
      Component = Link
      props.to = to
    } else if (href) {
      Component = "a"
      props.href = href
    }

    if (disable) {
      delete props.onClick
    }

    return (
      <Component className={className} {...props} ref={buttonRef}>
        {leftIcon && <span className={style.leftIcon}>{leftIcon}</span>}
        <span className={style.title}>{children}</span>
        {rightIcon && <span className={style.rightIcon}>{rightIcon}</span>}
      </Component>
    )
  },
)

export default ButtonTitle
