import HeadlessTippy from "@tippyjs/react/headless"
import React, { useState } from "react"
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2"

import { ButtonTitle } from "."
import { PopperWrapper } from "../Wrapper"
import style from "./ButtonDropDown.module.scss"

interface IProps {
  title: string
  leftIcon: React.ReactNode
  children: React.ReactNode
  customClass?: string
}

const ButtonDropDown: React.FC<IProps> = ({ title = "", children, leftIcon, customClass }) => {
  const [showOption, setShowOption] = useState<boolean>(false)

  const renderReview = () => {
    return (
      <div className={style.menu} tabIndex={-1}>
        <PopperWrapper>{children}</PopperWrapper>
      </div>
    )
  }

  const handleHideOption = () => {
    setShowOption(false)
  }
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <span>
      <HeadlessTippy
        interactive
        visible={showOption}
        placement="bottom-start"
        offset={[0, 10]}
        render={() => renderReview()}
        onClickOutside={handleHideOption}
      >
        <span onClick={() => setShowOption(!showOption)}>
          <ButtonTitle
            rounded
            outline
            customClass={customClass}
            leftIcon={leftIcon}
            rightIcon={showOption ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
          >
            {title}
          </ButtonTitle>
        </span>
      </HeadlessTippy>
    </span>
  )
}

export default ButtonDropDown
