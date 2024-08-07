import clsx from "clsx"
import React from "react"

import { CardIProps } from "../../interface"
import { CardVideo } from "../card"
import HeaderPlayList from "../header-play-list"
import style from "./PlayList.module.scss"

interface IProps {
  data: CardIProps[]
  title?: string
}
const Videos: React.FC<IProps> = ({ data, title = "Gợi ý cho bạn" }) => {
  return (
    <div className="grid">
      <HeaderPlayList title={title} small customClass={style.title} />
      <div className={clsx("row", style.list)}>
        {data.map((item, i) => (
          <div key={`${item.encodeId}-${i}`} className={clsx("col l-4 m-6 c-12", style.card)}>
            <CardVideo {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
