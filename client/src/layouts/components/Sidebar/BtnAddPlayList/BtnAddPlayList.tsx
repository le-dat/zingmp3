import clsx from "clsx"
import React from "react"
import { IoAdd } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../../../auth/AuthProvider"
import { ButtonTitle } from "../../../../components/button"
import { LOGIN } from "../../../../constants"
import { useAppSelector } from "../../../../hooks/useRedux"
import { getToastWarn } from "../../../../utils/toast"
import style from "./BtnAddPlayList.module.scss"

const BtnAddPlayList: React.FC = () => {
  const { encodeId } = useAppSelector((state) => state.song)
  const { currentUser } = useAuthContext()
  const navigate = useNavigate()

  const handleAddPlayList = () => {
    if (!currentUser) return navigate(`/${LOGIN}`)
    getToastWarn({ msg: "Tính năng này chưa hoàn thiện !" })
  }
  return (
    <ButtonTitle
      outline
      leftIcon={<IoAdd size={"2.2rem"} />}
      customClass={clsx(style.addPlayList, { [style.bottomPlayer]: encodeId !== "" })}
      onClick={handleAddPlayList}
    >
      Tạo playlist mới
    </ButtonTitle>
  )
}

export default BtnAddPlayList
