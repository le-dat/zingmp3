import React, { useState } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import { SlUserFollow } from "react-icons/sl"

import { ButtonTitle } from "../button"

interface IProps {
  primary?: boolean
  outline?: boolean
  disable?: boolean
  customClass?: string
}
const BtnFollow: React.FC<IProps> = ({ primary, outline, disable, customClass }) => {
  const [follow, setFollow] = useState<boolean>(false)

  const handleFollow = () => {
    setFollow(!follow)
  }

  return (
    <ButtonTitle
      customClass={customClass}
      rounded
      primary={primary}
      outline={outline}
      disable={disable}
      leftIcon={follow ? <AiOutlineCheck /> : <SlUserFollow />}
      onClick={handleFollow}
    >
      {follow ? "ĐÃ QUAN TÂM" : "QUAN TÂM"}
    </ButtonTitle>
  )
}

export default BtnFollow
