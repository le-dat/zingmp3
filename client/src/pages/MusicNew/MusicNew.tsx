import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

import HeaderPlayList from "../../components/HeaderPlayList"
import Media from "../../components/Media"
import { useScrollTop } from "../../hooks"
import * as services from "../../services"
import { getArraySongEmpty } from "../../utils/song"
import style from "./MusicNew.module.scss"

interface IProps {
  banner?: string
  items: any[]
  title: string
}
const MusicNew: React.FC = () => {
  useScrollTop()
  const [musicNew, setMusicNew] = useState<IProps>({ items: getArraySongEmpty(10), title: "Nhạc Mới" })
  useEffect(() => {
    const fetchApi = async () => {
      const res = await services.getNewReleaseChart()
      setMusicNew(res)
    }
    fetchApi()
  }, [])

  return (
    <>
      <Helmet>
        <title>#zingchart tuần, #zingchart nhạc mới</title>
      </Helmet>

      <div className={style.wrapper}>
        <HeaderPlayList title={musicNew.title} iconPlay customClass={style.headerPLayList} />
        <div className={style.lists}>
          {musicNew.items.map((item, index) => (
            <Media
              key={`media-${item?.encodeId}-${index}`}
              prefixIndex={index + 1}
              time
              iconKaraoke
              iconHeart
              iconThreeDots
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MusicNew
