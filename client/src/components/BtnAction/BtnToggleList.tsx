import clsx from "clsx"
import React from "react"
import { BsMusicNoteList } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import { setShowPlayListModal } from "../../redux/reducers/playListSlice"

import { ButtonIcon } from "../Button"
import style from "./BtnToggleList.module.scss"

interface IProps {
  title?: string
  disable?: boolean
  customClass?: string
}
const BtnToggleList: React.FC<IProps> = ({ title = "Danh sách phát", disable = false, customClass }) => {
  const dispatch = useAppDispatch()
  const { isShowPlayListModal } = useAppSelector((state) => state.playList)
  const className = clsx(style.button, { [style.active]: isShowPlayListModal }, customClass)

  const handleToggleList = () => {
    dispatch(setShowPlayListModal(!isShowPlayListModal))
  }

  return (
    <ButtonIcon
      backgroundSmall
      icon={<BsMusicNoteList />}
      title={title}
      disable={disable}
      customClass={className}
      onClick={handleToggleList}
    />
  )
}
export default BtnToggleList
