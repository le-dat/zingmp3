import React from "react"
import { Helmet } from "react-helmet-async"

import { useScrollTop } from "../../hooks"
import style from "./Radio.module.scss"

const Radio: React.FC = () => {
  useScrollTop()
  return (
    <>
      <Helmet>
        <title>Radio | Xem bài hát, album</title>
      </Helmet>

      <div className={style.wrapper}>
        <h3 className={style.title}>Trang này chưa hoàn thiện do thiếu dữ liệu</h3>
        <h3 className={style.title}>This page not complete :((</h3>
      </div>
    </>
  )
}

export default Radio
