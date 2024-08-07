import clsx from "clsx"
import React, { useState } from "react"
import { AiOutlineSetting } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { SlSizeFullscreen } from "react-icons/sl"
import { useDispatch } from "react-redux"

import images from "../../../assets/images"
import { useAppSelector } from "../../../hooks/useRedux"
import { setShowLyricSongModal } from "../../../redux/reducers/lyricSlice"
import { ButtonIcon } from "../../button"
import Image from "../../image"
import { TabButton } from "../../tab"
import { TabWrapper } from "../../wrapper"
import style from "./ModalLyric.module.scss"
import PlayListPanel from "./play-list-panel/PlayListPanel"
import KaraokePanel from "./karaoke-panel/KaraokePanel"
import LyricsPanel from "./lyrics-panel/LyricsPanel"

const TAB = ["Danh sách phát", "Karoke", "Lời bài hát"]

const ModalLyric: React.FC = () => {
  const dispatch = useDispatch()
  const [tab, setTab] = useState<number>(2)
  const { isShowLyricSongModal } = useAppSelector((state) => state.lyric)

  return (
    <div className={clsx(style.wrapper, { [style.active]: isShowLyricSongModal })}>
      <header className={clsx("is-center", style.header)}>
        <div className={style.left}>
          <Image src={images.icon.zingMP3} alt="ZingMP3" />
        </div>
        <div className={style.body}>
          <TabWrapper customClass={style.tabs}>
            {TAB?.map((item, index) => (
              <TabButton
                key={`tab-lyric-${index}`}
                active={index === tab}
                title={item}
                onClick={() => setTab(index)}
                customClass={style.tab}
              />
            ))}
          </TabWrapper>
        </div>
        <div className={style.right}>
          <ButtonIcon
            disable
            backgroundLarge
            rounded
            icon={<SlSizeFullscreen />}
            customClass={style.icon}
            title="Toàn màn hình"
          />
          <ButtonIcon
            disable
            backgroundLarge
            rounded
            icon={<AiOutlineSetting />}
            customClass={style.icon}
            title="Cài đặt"
          />
          <ButtonIcon
            backgroundLarge
            rounded
            icon={<BsChevronDown />}
            customClass={clsx(style.icon, style.iconClose)}
            title="Đóng"
            onClick={() => dispatch(setShowLyricSongModal(false))}
          />
        </div>
      </header>
      <div className={style.container}>
        {tab === 0 && <PlayListPanel />}
        {tab === 1 && <KaraokePanel />}
        {tab === 2 && <LyricsPanel />}
      </div>
    </div>
  )
}

export default ModalLyric
