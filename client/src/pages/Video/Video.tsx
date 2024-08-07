import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import Image from "../../components/image"
import { Paragraph, SubTitle, Title } from "../../components/info"
import { VIDEO as VIDEO_ROUTER } from "../../constants"
import { useScrollTop } from "../../hooks"
import * as services from "../../services"
import { getArrayVideoEmpty } from "../../utils/song"
import style from "./Video.module.scss"

interface CardIProps {
  encodeId: string
  thumbnailM: string
  title: string
  artists: any[]
  duration: number
}
interface LyricsIProps {
  content: string
  id: string
}
interface StreamingIProps {
  "360p": string
  "480p"?: string
  "720p"?: string
  "1080p"?: string
}
interface IProps {
  recommends?: CardIProps[]
  artists: any[]
  thumbnailM: string
  title: string
  lyrics: LyricsIProps[]
  streaming: {
    mp4: StreamingIProps
  }
}
const Video: React.FC = () => {
  useScrollTop()
  const { id } = useParams()
  const [video, setVideo] = useState<IProps>({
    recommends: getArrayVideoEmpty(5),
    thumbnailM: "",
    title: "",
    artists: [],
    lyrics: [],
    streaming: {
      mp4: {
        "360p": "",
        "480p": "",
        "720p": "",
        "1080p": "",
      },
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.getVideo(id as string)
      console.log(res)
      setVideo(res)
    }
    fetchData()
  }, [id])

  const getSrcVideo = () => {
    const arr: string[] = Object.values(video.streaming.mp4)
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== "") return arr[i]
    }
    return arr[0]
  }
  return (
    <div className={style.wrapper}>
      <div className={clsx("grid")}>
        <div className={clsx("row")}>
          <div className="col l-7 m-12 c-12">
            <video poster={video.thumbnailM} controls src={getSrcVideo()} className={style.video} />

            <div className={style.info}>
              <div className={style.mediaLeft}>
                <Image src={video.artists?.[0]?.thumbnailM} rounded className={style.thumbnailM} />
              </div>
              <div className={style.mediaRight}>
                <Title title={video.title} customClass={style.title} />
                <SubTitle artists={video.artists} customClass={style.subTitle} />
              </div>
            </div>

            {video?.lyrics?.length > 0 && (
              <div className={style.lyrics}>
                Lyric:
                {video?.lyrics?.map((item, index) => (
                  <Paragraph key={`lyric-${index}`} customClass={style.lyric}>
                    {item?.content}
                  </Paragraph>
                ))}
              </div>
            )}
          </div>

          <div className="col l-5 m-12 c-12">
            <div className={style.listPlaying}>
              <h3 className={style.header}>Danh Sách Phát</h3>
              <div className={clsx("scrollbar", style.listContainer)}>
                {video.recommends?.map((item, index) => (
                  <Link
                    to={`/${VIDEO_ROUTER}/${item.encodeId}`}
                    key={`video-recommends-${index}`}
                    className={clsx(style.card, { [style.active]: id === item.encodeId })}
                  >
                    <Image src={item.thumbnailM} className={style.cardImage} />
                    <div className={style.cardInfo}>
                      <Title title={item.title} />
                      <SubTitle artists={item.artists} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
