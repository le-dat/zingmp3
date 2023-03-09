import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { MdLogout } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import images from "../../assets/images"

import { useAuthContext } from "../../auth/AuthProvider"
import { ButtonTitle } from "../../components/Button"
import Image from "../../components/Image"
import { PopperWrapper } from "../../components/Wrapper"
import { LOGIN } from "../../constants"
import { useScrollTop } from "../../hooks"
import { getToastWarn } from "../../utils/toast"
import style from "./Auth.module.scss"

const Update: React.FC = () => {
  useScrollTop()
  const navigate = useNavigate()
  const { currentUser, logOut } = useAuthContext()
  const [avatar, setAvatar] = useState<any>(currentUser.photoURL ?? images.avatar)

  useEffect(() => {
    // clean up
    return () => {
      avatar?.preview && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const handleReviewAvatar = (e: any) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file.preview)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // await updateCurrentUser(avatar)
    getToastWarn({ msg: "Chức năng này chưa hoàn thiện !" })
  }

  const handleLogOut = async () => {
    await logOut()
    return navigate(`/${LOGIN}`)
  }
  return (
    <div className={clsx("is-center", style.wrapper)}>
      <PopperWrapper customClass={style.container} onClick={(e) => e.stopPropagation()}>
        <h3 className={clsx("is-center", style.header)}>Cập nhật thông tin</h3>
        <h3 className={clsx("is-center", style.header)}>User: {currentUser.email}</h3>

        <ButtonTitle outline rounded leftIcon={<MdLogout />} customClass={style.btnLogOut} onClick={handleLogOut}>
          Đăng xuất
        </ButtonTitle>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={clsx("is-center", style.info)}>
            <Image src={avatar} className={style.avatar} />
            <input type='file' name='photoURL' id='photoURL' onChange={handleReviewAvatar} />
            <label htmlFor='photoURL' className='label'>
              Chọn avatar
            </label>
            <ButtonTitle primary rounded large>
              Cập nhật
            </ButtonTitle>
          </div>
        </form>
      </PopperWrapper>
    </div>
  )
}

export default Update
