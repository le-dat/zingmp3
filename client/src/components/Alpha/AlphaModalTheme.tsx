import clsx from "clsx"
import React from "react"
import { useAppDispatch } from "../../hooks/useRedux"
import { changeTheme, setShowThemeModal } from "../../redux/reducers/themeSlice"
import { getToastWarn } from "../../utils/toast"

import { ButtonTitle } from "../Button"
import style from "./AlphaModalTheme.module.scss"

interface IProps {
  listThemeIndex: number
  themeIndex: number
  customClass?: string
}
const AlphaModalTheme: React.FC<IProps> = ({ listThemeIndex, themeIndex, customClass }) => {
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
      <ButtonTitle primary rounded onClick={handleApply} customClass={clsx("is-center", style.btn)}>
        Áp dụng
      </ButtonTitle>
      <ButtonTitle outline rounded onClick={handleTest} customClass={clsx("is-center", style.btn)}>
        Xem trước
      </ButtonTitle>
    </div>
  )
}

export default AlphaModalTheme
