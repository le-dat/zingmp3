import HeadlessTippy from "@tippyjs/react/headless"
import clsx from "clsx"
import React, { useState } from "react"
import { AiOutlineRight } from "react-icons/ai"
import { BiBlock, BiShare } from "react-icons/bi"
import { BsFacebook, BsFillFileMusicFill, BsMusicNoteList, BsThreeDots } from "react-icons/bs"
import { FiDownload, FiLink } from "react-icons/fi"
import { GiMicrophone } from "react-icons/gi"
import { HiOutlineCodeBracket } from "react-icons/hi2"
import { IoIosAddCircleOutline } from "react-icons/io"
import { MdAddBox, MdOutlineModeComment } from "react-icons/md"
import { SiZalo } from "react-icons/si"

import { useAppDispatch } from "../../hooks/useRedux"
import { setShowLyricSongModal } from "../../redux/reducers/lyricSlice"
import { ButtonIcon, ButtonTitle } from "../button"
import Image from "../Image"
import { SubTitle, Title } from "../Info"
import Menu from "../Menu/Menu"
import { PopperWrapper } from "../Wrapper"
import style from "./BtnThreeDotMedia.module.scss"

const MENU_MEDIA = [
  {
    leftIcon: <BsFillFileMusicFill />,
    title: "Cài đặt nhạc chờ",
  },
  {
    leftIcon: <IoIosAddCircleOutline />,
    title: "Thêm vào playlist",
    children: [{ leftIcon: <MdAddBox />, title: "Tạo playlist mới" }],
    rightIcon: <AiOutlineRight />,
  },
  {
    leftIcon: <GiMicrophone />,
    title: "Phát cùng lời bài hát",
  },
  {
    leftIcon: <MdOutlineModeComment />,
    title: "Bình luận",
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
  title: string
  artists?: any[]
  artistsNames?: string
  thumbnailM: string
  disable?: boolean
  tooltip?: string
  customClass?: string
}
const BtnThreeDotMedia: React.FC<IProps> = ({
  tooltip = "Xem thêm",
  disable,
  customClass,
  title = "",
  artists = [],
  artistsNames = "",
  thumbnailM = "",
}) => {
  const dispatch = useAppDispatch()
  const [showOption, setShowOption] = useState<boolean>(false)

  const handleToggleLyric = () => {
    dispatch(setShowLyricSongModal(true))
  }

  const Media: React.FC = () => {
    return (
      <div className={style.media}>
        <div className={style.mediaLeft}>
          <Image src={thumbnailM} className={style.mediaThumbnail} />
        </div>
        <div className={style.mediaCenter}>
          <Title title={title} hoverColor />
          {artistsNames ? (
            <SubTitle subTitle={artistsNames} customClass={style.subTitleItem} />
          ) : (
            <SubTitle artists={artists} customClass={style.subTitleItem} />
          )}
        </div>
      </div>
    )
  }
  const GroupButtonSong: React.FC = () => {
    return (
      <div className={style.groupBtnMenu}>
        <div className={clsx("is-center", style.groupBtnList)}>
          <ButtonTitle vertical disable leftIcon={<FiDownload />} customClass={clsx("is-center", style.groupBtn)}>
            Tải xuống
          </ButtonTitle>
          <ButtonTitle
            vertical
            leftIcon={<BsMusicNoteList />}
            customClass={clsx("is-center", style.groupBtn)}
            onClick={handleToggleLyric}
          >
            Lời bài hát
          </ButtonTitle>
          <ButtonTitle vertical disable leftIcon={<BiBlock />} customClass={clsx("is-center", style.groupBtn)}>
            Chặn
          </ButtonTitle>
        </div>
      </div>
    )
  }
  const renderReview = () => {
    return (
      <div className={style.songInfo} tabIndex={-1}>
        <PopperWrapper>
          <Media />
          <GroupButtonSong />
          <Menu data={MENU_MEDIA} />
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
        <span onClick={() => setShowOption(!showOption)}>
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

export default BtnThreeDotMedia
