import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

import { ImgTop100 } from "../../components/Icons"
import { PlayListAlbum } from "../../components/PlayList"
import { useScrollTop } from "../../hooks"
import * as services from "../../services"
import { getArraySongEmpty } from "../../utils/song"
import style from "./Top100.module.scss"

interface IProps {
  items: any[]
  title: string
}

const Top100: React.FC = () => {
  useScrollTop()
  const [albums, setAlbums] = useState<IProps[]>(Array(5).fill({ items: getArraySongEmpty(20), title: "" }))
  useEffect(() => {
    const fetchApi = async () => {
      const res = await services.getTop100()
      setAlbums(res)
    }
    fetchApi()
  }, [])

  return (
    <>
      <Helmet>
        <title>Top 100 | Tuyển tập nhạc hay</title>
      </Helmet>

      <div className={style.wrapper}>
        <div className={clsx("is-center", style.banner)}>
          <ImgTop100 />
        </div>
        <div className={style.container}>
          {albums.map((item, i) => (
            <div key={`playlist-top100-${i}`} className={style.album}>
              <PlayListAlbum data={item.items} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Top100
