import clsx from "clsx"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

import images from "../../assets/images"
import { AlphaPage } from "../../components/Alpha"
import { ButtonTitle } from "../../components/Button"
import Media from "../../components/Media/Media"
import { useScrollTop } from "../../hooks"
import * as services from "../../services"
import { LineChart } from "./Chart"
import { RTChartIProps, WeekChartIProps } from "./interface"
import HeaderPlayList from "../../components/HeaderPlayList"
import WeekChartItem from "./WeekChartItem"
import style from "./ZingChart.module.scss"
import { getRandom } from "../../utils/common"
import { getArraySongEmpty } from "../../utils/song"

const ZingChart: React.FC = () => {
  useScrollTop()
  const [seeTop100, setSeeTop100] = useState<number>(10)
  const [RTChart, setRTChart] = useState<RTChartIProps>({
    chart: { items: {}, times: [{ hour: "0" }] },
    items: getArraySongEmpty(10),
    promotes: []
  })
  const [weekChart, setWeekChart] = useState<WeekChartIProps[]>([
    { country: "vn", items: getArraySongEmpty(5) },
    { country: "us", items: getArraySongEmpty(5) },
    { country: "korean", items: getArraySongEmpty(5) }
  ])

  useEffect(() => {
    const fetchApi = async () => {
      const res = await services.getChartHome()
      setRTChart(res?.RTChart)
      setWeekChart(Object.values(res?.weekChart))
    }
    fetchApi()
  }, [])

  return (
    <>
      <Helmet>
        <title>#zingchart | Xem bài hát, thịnh hành 100</title>
      </Helmet>

      <div className={clsx("is-relative-1", style.wrapper)}>
        <AlphaPage src={images.background.zingChart} alt='bg-zing-chart' />

        <div className={clsx("is-relative-10", style.zingChart)}>
          <HeaderPlayList title='#zingchart' iconPlay customClass={style.header} />
          <LineChart chart={RTChart.chart} items={RTChart.items} />

          <div className='mar-b-20'>
            {RTChart?.promotes && (
              <Media
                prefixPromote
                {...RTChart?.promotes[getRandom(RTChart?.promotes.length)]}
                iconKaraoke
                iconHeart
                iconThreeDots
              />
            )}
            {RTChart?.items?.map(
              (item, index) =>
                index < seeTop100 && (
                  <Media
                    key={`media-${item?.encodeId}-${index}`}
                    prefixIndex={index + 1}
                    time
                    iconKaraoke
                    iconHeart
                    iconThreeDots
                    {...item}
                  />
                )
            )}
          </div>

          {seeTop100 === 10 && (
            <div className={"is-center"}>
              <ButtonTitle rounded outline customClass={style.btnTop100} onClick={() => setSeeTop100(100)}>
                Xem top 100
              </ButtonTitle>
            </div>
          )}
        </div>

        <div className={clsx("is-relative-1", style.weekChart)}>
          <AlphaPage src={images.background.weekChart} alt='bg-zing-chart' />

          <div className='is-relative-10'>
            <HeaderPlayList title='Bảng Xếp Hạng Tuần' customClass={style.header} />
            <div className='grid'>
              <div className={clsx("row", style.list)}>
                {weekChart?.map((item, i) => (
                  <WeekChartItem key={`${item?.country}-${i}`} customClass={clsx("col l-4 m-12 c-12")} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ZingChart
