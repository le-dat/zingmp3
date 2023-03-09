import clsx from "clsx"
import React from "react"

import { useAppDispatch } from "../../../hooks/useRedux"
import { changeTheme, setShowThemeModal } from "../../../redux/reducers/themeSlice"
import { getToastWarn } from "../../../utils/toast"
import { AlphaTheme } from "../../Alpha"
import Image from "../../Image"
import style from "./ModalThemeItem.module.scss"

interface IProps {
  themeThumb: any
  className: string
  title: string
  listThemeIndex: number
  themeIndex: number
  customClass?: string
}
const ModalThemeItem: React.FC<IProps> = ({ themeThumb, title, listThemeIndex, themeIndex, customClass }) => {
  const dispatch = useAppDispatch()

  const handleApply = () => {
    dispatch(changeTheme({ listThemeIndex, themeIndex }))
    dispatch(setShowThemeModal(false))
  }
  const handleTest = () => {
    getToastWarn({ msg: "Tính năng này chưa hoàn thiện !" })
  }

  return (
    <div className={clsx(style.wrapper, customClass)}>
      <div className={clsx("is-relative-1 ", style.thumb)}>
        <Image src={themeThumb} className={style.image} />
        <AlphaTheme handleApply={handleApply} handleTest={handleTest} customClass={style.alpha} />
      </div>
      <h4 className={style.title}>{title}</h4>
    </div>
  )
}

export default ModalThemeItem
