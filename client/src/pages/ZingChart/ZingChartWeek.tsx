import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import images from "../../assets/images"
import { AlphaPage } from "../../components/alpha"
import HeaderPlayList from "../../components/header-play-list"
import Media from "../../components/media"
import { TabNav } from "../../components/tab"
import { TabWrapper } from "../../components/wrapper"
import { ZING_CHART, ZING_CHART_WEEK } from "../../constants"
import { useScrollTop } from "../../hooks"
import * as services from "../../services"
import { getTypeTab } from "../../utils/common"
import { getArraySongEmpty } from "../../utils/song"
import style from "./ZingChart.module.scss"

const ZingChartWeek: React.FC = () => {
  useScrollTop()
  const { id } = useParams()
  const [country, setCountry] = useState(id as string)
  const [weekChart, setWeekChart] = useState([
    { country: "vn", items: getArraySongEmpty(20) },
    { country: "us", items: getArraySongEmpty(20) },
    { country: "korean", items: getArraySongEmpty(20) },
  ])

  useEffect(() => {
    const fetchApi = async () => {
      const res = await services.getChartHome()
      setWeekChart(Object.values(res?.weekChart))
    }
    fetchApi()
  }, [country])

  return (
    <div className={clsx("is-relative-1", style.wrapper)}>
      <AlphaPage src={images.background.weekChart} alt="bg-week-chart" />

      <div className={clsx("is-relative-10", style.container)}>
        <HeaderPlayList title="Bảng Xếp Hạng Tuần" iconPlay customClass={style.header} />

        <TabWrapper>
          {weekChart?.map((item, index) => (
            <div key={`${item?.country}-${index}`} className={style.item} onClick={() => setCountry(item?.country)}>
              <TabNav to={`/${ZING_CHART}/${ZING_CHART_WEEK}/${item?.country}`}>
                {getTypeTab[item?.country ?? "default"]}
              </TabNav>
            </div>
          ))}
        </TabWrapper>

        <div className={style.container}>
          {weekChart
            ?.find((item) => item.country === country)
            ?.items.map((item, index) => (
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
    </div>
  )
}

export default ZingChartWeek
