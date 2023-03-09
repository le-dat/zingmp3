import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { BsFillPlayFill } from "react-icons/bs"
import { useParams } from "react-router-dom"

import { BtnHeartAlbum, BtnThreeDotCard } from "../../components/BtnAction"
import { ButtonTitle } from "../../components/Button"
import HeaderPlayList from "../../components/HeaderPlayList"
import { SubTitle, Title } from "../../components/Info"
import Media from "../../components/Media"
import { PlayListArtist } from "../../components/PlayList"
import { useScrollTop } from "../../hooks"
import { ArtistIProps, MediaIProps } from "../../interface"
import * as services from "../../services"
import { formatFollower } from "../../utils/common"
import { getArrayArtistEmpty, getArraySongEmpty } from "../../utils/song"
import { getToastWarn } from "../../utils/toast"
import { SectionIProps } from "../interface"
import style from "./DetailPlayList.module.scss"
import ThumbnailHeader from "./ThumbnailHeader"

interface IProps {
  encodeId: string
  title: string
  thumbnailM: string
  description: string
  like: number
  releaseDate: string | number
  artists: ArtistIProps[]
  sections: SectionIProps[]
  song: {
    items: MediaIProps[]
  }
}
const DetailPlayList: React.FC = () => {
  useScrollTop()
  const { id } = useParams()
  const [detail, setDetail] = useState<IProps>({
    encodeId: "",
    title: "Playlist",
    thumbnailM: "",
    description: "",
    like: 1000,
    releaseDate: "20/10/2020",
    artists: getArrayArtistEmpty(5),
    sections: [
      {
        items: getArraySongEmpty(20),
        sectionType: "",
        title: ""
      }
    ],
    song: {
      items: getArraySongEmpty(20)
    }
  })
  useEffect(() => {
    const fetchData = async () => {
      const res = await services.getDetailPlayList(id as string)
      console.log(res)
      setDetail(res)
    }

    if (id) fetchData()
  }, [id])

  const handlePlay = () => {
    getToastWarn({ msg: "Tính năng này chưa hoàn thiện !" })
  }

  return (
    <>
      <Helmet>
        <title>{detail?.title}</title>
      </Helmet>

      <div className={clsx("grid", style.wrapper)}>
        <div className={clsx("row", style.container)}>
          <div className={clsx("col l-4 m-12 c-12")}>
            <div className='grid'>
              <div className={clsx("row", style.containerTop)}>
                <div className={clsx("col l-12 m-3 c-12")}>
                  <ThumbnailHeader thumbnailM={detail?.thumbnailM} />
                </div>
                <div className={clsx("col l-12 m-9 c-12", style.mediaContent)}>
                  <Title title={detail?.title} customClass={style.mediaTitle} />
                  <SubTitle subTitle={`Cập nhật: ${detail?.releaseDate}`} customClass={style.mediaSubTitle} />
                  <SubTitle artists={detail?.artists} customClass={style.mediaSubTitle} />
                  <SubTitle
                    subTitle={`${formatFollower(detail?.like)} người yêu thích`}
                    customClass={style.mediaSubTitle}
                  />
                  <div className={style.group}>
                    <ButtonTitle
                      leftIcon={<BsFillPlayFill />}
                      rounded
                      disable={detail.encodeId === ""}
                      customClass={style.mediaBtn}
                      onClick={handlePlay}
                    >
                      Phát tất cả
                    </ButtonTitle>
                    <div className={clsx("is-center", style.level)}>
                      <BtnHeartAlbum disable={detail.encodeId === ""} customClass={style.levelItem} album={detail} />
                      <BtnThreeDotCard disable={detail.encodeId === ""} customClass={style.levelItem} {...detail} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx("col l-8 m-12 c-12")}>
            <div className={style.playList}>
              <div className={style.des}>
                <span className={style.desPrefix}>{detail?.description ? "Lời tựa: " : "Bài hát"}</span>
                {detail?.description}
              </div>
              {detail?.song.items.map(
                (item, index) =>
                  item.artists &&
                  item.album && (
                    <Media
                      key={`${item.encodeId}-${index}`}
                      prefixIcon
                      time
                      iconKaraoke
                      iconHeart
                      iconThreeDots
                      {...item}
                    />
                  )
              )}

              {detail?.sections?.map((section, index) => (
                <div key={`section-${index}`}>
                  <HeaderPlayList title={section.title} small customClass={style.title} />
                  {section?.items?.map(
                    (item, i) =>
                      item.artists &&
                      item.album && (
                        <Media
                          key={`${item.encodeId}-${i}`}
                          prefixIcon
                          time
                          iconKaraoke
                          iconHeart
                          iconThreeDots
                          {...item}
                        />
                      )
                  )}
                </div>
              ))}
            </div>
          </div>

          {detail?.artists?.length > 0 && (
            <div className='col l-12 m-12 c-12'>
              <PlayListArtist data={detail?.artists} title='Nghệ Sĩ Tham Gia' />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default DetailPlayList
