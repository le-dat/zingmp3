import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../auth/AuthProvider"
import { LOGIN } from "../../constants"
import { useAppSelector } from "../../hooks/useRedux"
import * as services from "../../services"
import { getToastSuccess, getToastWarn } from "../../utils/toast"
import { ButtonIcon } from "../Button"

interface Song {
  encodeId: string
  [key: string]: any
}

interface IProps {
  song: Song
  disable?: boolean
  customClass?: string
}

interface ResponseIProps {
  status: boolean
  msg: string
}

const BtnHeartSong: React.FC<IProps> = ({ song, disable = false, customClass }) => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const { playListLikedSong } = useAppSelector((state) => state.personal)
  const [isActive, setIsActive] = useState<boolean>(!!playListLikedSong.find((item) => item.encodeId === song.encodeId))

  const handleAddToList = async () => {
    const response: ResponseIProps = await services.addLikedSong(currentUser.email, song)
    const { status, msg } = response
    return status ? getToastSuccess({ msg }) : getToastWarn({ msg })
  }

  const handleRemoveFromList = async () => {
    const response: ResponseIProps = await services.removeLikedSong(currentUser.email, song.encodeId)
    const { status, msg } = response
    return status ? getToastSuccess({ msg }) : getToastWarn({ msg })
  }

  const handleToggleHeart = () => {
    if (!currentUser) {
      return navigate(`/${LOGIN}`)
    }
    setIsActive(!isActive)
    return isActive ? handleRemoveFromList() : handleAddToList()
  }

  return (
    <ButtonIcon
      backgroundSmall
      rounded
      disable={disable}
      active={isActive}
      icon={isActive ? <AiFillHeart /> : <AiOutlineHeart />}
      title={isActive ? "Xóa bài hát khỏi thư viện" : "Thêm bài hát vào thư viện"}
      customClass={customClass}
      onClick={handleToggleHeart}
    />
  )
}

export default BtnHeartSong
