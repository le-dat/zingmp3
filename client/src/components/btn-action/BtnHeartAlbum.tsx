import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../auth/AuthProvider"
import { LOGIN } from "../../constants"
import { useAppSelector } from "../../hooks/useRedux"
import * as services from "../../services"
import { getToastSuccess, getToastWarn } from "../../utils/toast"
import { ButtonIcon } from "../button"

interface IProps {
  album: any
  disable?: boolean
  customClass?: string
}
interface ResponseIProps {
  status: boolean
  msg: string
}
const BtnHeartAlbum: React.FC<IProps> = ({ album, disable = false, customClass }) => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const { playListLikedAlbum } = useAppSelector((state) => state.personal)
  const [active, setActive] = useState<boolean>(!!playListLikedAlbum.find((item) => item.encodeId === album.encodeId))

  const handleAddToList = async () => {
    const res: ResponseIProps = await services.addLikedAlbum(currentUser.email, album)
    const { status, msg } = res
    return status ? getToastSuccess({ msg }) : getToastWarn({ msg })
  }

  const handleRemoveFromList = async () => {
    const res: ResponseIProps = await services.removeLikedAlbum(currentUser.email, album.encodeId)
    const { status, msg } = res
    return status ? getToastSuccess({ msg }) : getToastWarn({ msg })
  }

  const handleToggleHeart = () => {
    if (!currentUser) return navigate(`/${LOGIN}`)

    setActive(!active)
    return active ? handleRemoveFromList() : handleAddToList()
  }

  return (
    <ButtonIcon
      backgroundSmall
      rounded
      disable={disable}
      active={active}
      icon={active ? <AiFillHeart /> : <AiOutlineHeart />}
      title={active ? "Xóa album khỏi thư viên" : "Thêm album vào thư viện"}
      customClass={customClass}
      onClick={handleToggleHeart}
    />
  )
}

export default BtnHeartAlbum
