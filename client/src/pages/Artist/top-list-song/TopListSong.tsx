import clsx from "clsx"
import React from "react"

import HeaderPlayList from "../../../components/HeaderPlayList"
import { MediaIProps } from "../../../interface"
import Media from "../../../components/Media"
import style from "./TopListSong.module.scss"

interface TopListMediaIProps {
  data: MediaIProps[]
  title?: string
}
const TopListSong: React.FC<TopListMediaIProps> = ({ data, title = "Bài Hát Nổi Bật" }) => {
  return (
    <div className="grid">
      <HeaderPlayList title={title} small customClass={style.title} />

      <div className="row">
        {data.map(
          (item, index) =>
            index < 6 && (
              <div key={`item-song-${index}`} className={clsx("col l-6 m-6 c-12", style.item)}>
                <Media small {...item} time iconKaraoke iconHeart iconThreeDots />
              </div>
            ),
        )}
      </div>
    </div>
  )
}

export default TopListSong
