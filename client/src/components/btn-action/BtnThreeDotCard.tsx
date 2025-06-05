import HeadlessTippy from "@tippyjs/react/headless"
import clsx from "clsx"
import React, { useState } from "react"
import { AiOutlineDownload, AiOutlineRight } from "react-icons/ai"
import { BiShare } from "react-icons/bi"
import { BsFacebook, BsThreeDots } from "react-icons/bs"
import { FiLink } from "react-icons/fi"
import { HiOutlineCodeBracket } from "react-icons/hi2"
import { IoIosAddCircleOutline } from "react-icons/io"
import { MdOutlineModeComment } from "react-icons/md"
import { SiZalo } from "react-icons/si"

import { ButtonIcon } from "../Button"
import Menu from "../Menu/Menu"
import { PopperWrapper } from "../Wrapper"
import style from "./BtnThreeDotCard.module.scss"

const MENU_CARD = [
  {
    leftIcon: <IoIosAddCircleOutline />,
    title: "Thêm vào danh sách phát",
    rightIcon: <AiOutlineRight />,
  },

  {
    leftIcon: <MdOutlineModeComment />,
    title: "Bình luận",
  },
  {
    leftIcon: <AiOutlineDownload />,
    title: "Tải xuống",
  },
  {
    leftIcon: <FiLink />,
    title: "Sao chép link",
  },
  {
    leftIcon: <BiShare />,
    title: "Chia sẻ",
    children: [
      { leftIcon: <BsFacebook />, title: "Facebook" },
      { leftIcon: <SiZalo />, title: "Zalo" },
      { leftIcon: <HiOutlineCodeBracket />, title: "Mã nhúng" },
    ],
    rightIcon: <AiOutlineRight />,
  },
]
interface IProps {
  tooltip?: string
  disable?: boolean
  customClass?: string
}
const BtnThreeDotCard: React.FC<IProps> = ({ tooltip = "Khác", disable, customClass }) => {
  const [showOption, setShowOption] = useState<boolean>(false)

  const renderReview = () => {
    return (
      <div tabIndex={-1}>
        <PopperWrapper>
          <Menu data={MENU_CARD} />
        </PopperWrapper>
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
        placement="top-start"
        offset={[10, 30]}
        render={() => renderReview()}
        onClickOutside={handleHideOption}
      >
        <span onClick={() => !disable && setShowOption(!showOption)}>
          <ButtonIcon
            icon={<BsThreeDots />}
            backgroundSmall
            title={tooltip}
            disable={disable}
            rounded
            customClass={clsx(style.button, customClass)}
          />
        </span>
      </HeadlessTippy>
    </span>
  )
}

export default BtnThreeDotCard
