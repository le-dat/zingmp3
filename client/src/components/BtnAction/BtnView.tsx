import React, { useState } from "react"
import { VscMultipleWindows } from "react-icons/vsc"

import { useAppDispatch } from "../../hooks/useRedux"
import { ButtonIcon } from "../Button"

interface IProps {
  title?: string
  disable?: boolean
  customClass?: string
}
const BtnView: React.FC<IProps> = ({ title = "Chế độ cửa sổ", disable = false, customClass }) => {
  const dispatch = useAppDispatch()
  const [isView, setIsView] = useState<boolean>(false)

  const handleLyric = () => {
    setIsView(!isView)
  }

  return (
    <ButtonIcon
      backgroundSmall
      rounded
      icon={<VscMultipleWindows />}
      title={title}
      active={isView}
      disable={disable}
      customClass={customClass}
      onClick={handleLyric}
    />
  )
}

export default BtnView
