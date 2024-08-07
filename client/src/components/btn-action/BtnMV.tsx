import React, { useState } from "react"
import { MdOutlineVideoLibrary } from "react-icons/md"

import { ButtonIcon } from "../button"

interface IProps {
  title?: string
  disable?: boolean
  customClass?: string
}
const BtnMV: React.FC<IProps> = ({ title = "MV", disable = false, customClass }) => {
  const [isMV, setIsMv] = useState<boolean>(false)

  const handleMV = () => setIsMv(!isMV)

  return (
    <ButtonIcon
      backgroundSmall
      rounded
      title={isMV ? title : ""}
      icon={<MdOutlineVideoLibrary />}
      active={isMV}
      disable={disable}
      customClass={customClass}
      onClick={handleMV}
    />
  )
}

export default BtnMV
