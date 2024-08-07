import clsx from "clsx"
import React from "react"

import { useAppSelector } from "../../../../hooks/useRedux"
import Image from "../../../image"
import { SubTitle, Title } from "../../../info"
import { SlideWrapper } from "../../../wrapper"
import style from "./PlayListPanel.module.scss"

const PlayListPanel: React.FC = () => {
  const { playListSong } = useAppSelector((state) => state.playList)

  return (
    <div className={style.wrapper}>
      <SlideWrapper pc={3} pcLow={3} tablet={2} mobile={1}>
        {playListSong.map((item, index) => (
          <div key={`playList-item-${index}`} className={clsx("is-center", style.item)}>
            <Image src={item?.thumbnailM} alt={item?.title} className={style.image} />
            <Title title={item?.title} customClass={style.title} />
            <SubTitle artists={item?.artists} customClass={style.subTitle} />
          </div>
        ))}
      </SlideWrapper>
    </div>
  )
}
export default PlayListPanel
