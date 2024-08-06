import React from "react"

import { ButtonTitle } from "../../../components/Button"
import Title from "../../../components/HeaderPlayList"
import Media from "../../../components/Media/Media"
import { ZING_CHART_WEEK } from "../../../constants"
import { getTypeTab } from "../../../utils/common"
import style from "./WeekChartItem.module.scss"

interface IProps {
  country: string
  items: Array<any>
  customClass?: string
}
const WeekChartItem: React.FC<IProps> = ({ country = "vn", items = [], customClass }) => {
  const link = `${ZING_CHART_WEEK}/${country}`

  return (
    <div className={customClass}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <Title title={getTypeTab[country ?? "default"]} to={link} small iconPlay customClass={style.title} />
        </div>

        <div className={style.contain}>
          {items.length > 0 &&
            items.map(
              (item, index) =>
                index < 5 && (
                  <Media
                    key={`media-${item?.encodeId}-${index}`}
                    prefixIndex={index + 1}
                    small
                    time
                    iconHeart
                    {...item}
                  />
                ),
            )}
        </div>

        <div className="is-center">
          <ButtonTitle outline rounded to={link}>
            Xem tất cả
          </ButtonTitle>
        </div>
      </div>
    </div>
  )
}

export default WeekChartItem
