import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import HeaderPlayList from "../../components/HeaderPlayList"
import { PlayListAlbum } from "../../components/PlayList"
import { SlideArtist, SlideBanner, SlideRadio } from "../../components/Slide"
import { useScrollTop } from "../../hooks"
import * as services from "../../services"
import { getArrayPlayListEmpty } from "../../utils/song"
import { SectionIProps } from "../interface"
import style from "./Discover.module.scss"

interface ResponseIProps {
  items: SectionIProps[]
}

const useFetchData = (initialData: SectionIProps[]) => {
  const [data, setData] = useState<SectionIProps[]>(initialData)

  useEffect(() => {
    const fetchApi = async () => {
      const res: ResponseIProps = await services.getHome()
      setData(res.items)
    }
    fetchApi()
  }, [])

  return data
}

const Discover: React.FC = () => {
  useScrollTop()
  const initialData = [
    {
      sectionType: "banner",
      items: Array(10).fill({}),
      title: "",
    },
    {
      sectionType: "playlist",
      items: getArrayPlayListEmpty(20),
      title: "",
    },
  ]
  const data = useFetchData(initialData)

  const sectionComponents: { [key: string]: (item: SectionIProps, index: number) => JSX.Element } = {
    banner: (item, index) => (
      <div key={`banner-${index}`} className={style.banner}>
        <SlideBanner data={item.items} />
      </div>
    ),
    playlist: (item, index) => (
      <div key={`playlist-${index}`} className={style.playlist}>
        <PlayListAlbum data={item.items} title={item.title} />
      </div>
    ),
    "new-release": (item, index) => (
      <div key={`new-release-${index}`} className={style.newRelease}>
        {/* <Slide slider={item.items} /> */}
      </div>
    ),
    livestream: (item, index) => (
      <div key={`livestream-${index}`} className={style.liveStream}>
        <SlideRadio data={item.items} title={item.title} />
      </div>
    ),
    RTChart: (item, index) => (
      <div key={`RTChart-${index}`} className={style.RTChart}>
        {/* <Slide slider={item.items} /> */}
      </div>
    ),
    weekChart: (item, index) => (
      <div key={`weekChart-${index}`} className={style.weekChart}>
        {/* <Slide slider={item.items} /> */}
      </div>
    ),
    artistSpotlight: (item, index) => (
      <div key={`artistSpotlight-${index}`} className={style.artistSpotlight}>
        <HeaderPlayList title="Nghệ sĩ nổi bật" />
        <SlideArtist />
      </div>
    ),
    event: (item, index) => (
      <div key={`event-${index}`} className={style.event}>
        {/* <Slide slider={item.items} /> */}
      </div>
    ),
  }

  return (
    <>
      <Helmet>
        <title>Zing MP3 | Nghe tải nhạc trực tuyến</title>
      </Helmet>

      <div className={style.wrapper}>
        {data?.map((item, index) => sectionComponents[item.sectionType]?.(item, index) || null)}
      </div>
    </>
  )
}

export default Discover
