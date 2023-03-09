import clsx from "clsx"
import React from "react"
import { Helmet } from "react-helmet-async"
import images from "../../assets/images"

import HeaderPlayList from "../../components/HeaderPlayList"
import Image from "../../components/Image"
import { useScrollTop } from "../../hooks"
import { getToastWarn } from "../../utils/toast"
import style from "./MusicKind.module.scss"

const data = [
  {
    title: "Best Of 2022",
    cover: images.musicKind.kind1
  },
  {
    title: "Nhạc Mới",
    cover: images.musicKind.kind2
  },
  {
    title: "Top 100",
    cover: images.musicKind.kind3
  },
  {
    title: "Nhạc Xuân",
    cover: images.musicKind.kind4
  }
]
const MusicKind: React.FC = () => {
  useScrollTop()

  const handleClick = () => {
    getToastWarn({ msg: "Tính năng này chưa hoàn thiện" })
  }

  return (
    <>
      <Helmet>
        <title>Chủ Đề Nhạc Hot | Tuyển tập nhạc hay</title>
      </Helmet>
      <div className={clsx("grid", style.wrapper)}>
        <HeaderPlayList title='Nổi Bật' />
        <div className={clsx("row", style.list)}>
          {data.map((item, index) => (
            <div key={`music-kind-item-${index}`} onClick={handleClick} className={clsx("col l-3 m-6 c-4", style.item)}>
              <Image src={item.cover} className={style.image} />
              <div className={style.title}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MusicKind
