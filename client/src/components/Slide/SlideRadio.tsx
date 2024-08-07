import React from "react"

import { RadioIProps } from "../../interface"
import { CardRadio } from "../card"
import { Title } from "../info"
import { SlideWrapper } from "../wrapper"
import style from "./SlideRadio.module.scss"

interface IProps {
  data: RadioIProps[]
  title: string
}
const SlideRadio: React.FC<IProps> = ({ data, title }) => {
  return (
    <div className={style.wrapper}>
      <Title title={title} customClass={style.header} />

      <SlideWrapper>
        {data.map((item, i) => (
          <div key={`slider-radio-${item.encodeId}-${i}`}>
            <CardRadio
              encodeId={item.encodeId}
              title={item.title}
              thumbnailM={item.thumbnailM}
              subTitle={`${item.activeUsers} đang nghe`}
            />
          </div>
        ))}
      </SlideWrapper>
    </div>
  )
}

export default SlideRadio
