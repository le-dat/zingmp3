import React from "react"
import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"

import { ButtonTitle } from "../../components/Button"
import HeaderPlayList from "../../components/HeaderPlayList"
import { TabNav } from "../../components/Tab"
import { TabWrapper } from "../../components/Wrapper"
import { PERSONAL, RECENTLY, LIBRARY_PLAY_LIST, LIBRARY_SONG } from "../../constants"
import { useScrollTop } from "../../hooks"
import { getToastWarn } from "../../utils/toast"
import style from "./Personal.module.scss"

const TABS = [
  {
    title: "BÀI HÁT",
    to: `/${PERSONAL}/${LIBRARY_SONG}`,
  },
  {
    title: "PLAY LIST",
    to: `/${PERSONAL}/${LIBRARY_PLAY_LIST}`,
  },
  {
    title: "GẦN ĐÂY",
    to: `/${PERSONAL}/${RECENTLY}`,
  },
]
const Personal: React.FC = () => {
  useScrollTop()

  return (
    <>
      <Helmet>
        <title>Nhạc của tôi</title>
      </Helmet>

      <div className={style.wrapper}>
        <HeaderPlayList title="Thư viện" iconPlay />
        <div className={style.container}>
          <TabWrapper>
            {TABS.map((item, index) => (
              <TabNav small key={`tab-user-${index}`} to={item.to}>
                {item.title}
              </TabNav>
            ))}
          </TabWrapper>

          <div className={style.navigate}>
            <ButtonTitle rounded primary to="#">
              Yêu thích
            </ButtonTitle>
            <ButtonTitle rounded outline onClick={() => getToastWarn({ msg: "Chức năng này chưa hoàn thiện" })}>
              Đã tải lên
            </ButtonTitle>
          </div>

          <div className={style.container}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Personal
