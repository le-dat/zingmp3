import clsx from "clsx"
import React, { useEffect, useState } from "react"
import GoogleButton from "react-google-button"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../auth/AuthProvider"
import { ButtonTitle } from "../../components/button"
import { TabNav } from "../../components/tab"
import { PopperWrapper, TabWrapper } from "../../components/wrapper"
import { DISCOVER, LOGIN, SIGN_UP } from "../../constants"
import { useScrollTop } from "../../hooks"
import { getToastError, getToastSuccess } from "../../utils/toast"
import style from "./Auth.module.scss"

interface FormIProps {
  email: string
  password: string
}

const useSignUpForm = (initialValues: FormIProps) => {
  const [values, setValues] = useState<FormIProps>(initialValues)
  const navigate = useNavigate()
  const { signUp, signInWithGoogle, currentUser } = useAuthContext()

  useEffect(() => {
    if (currentUser) {
      navigate(DISCOVER)
      getToastSuccess({ msg: "Tạo tài khoản thành công" })
    }
  }, [currentUser, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = values
    try {
      await signUp(email, password)
      navigate(DISCOVER)
      getToastSuccess({ msg: "Tạo tài khoản thành công" })
    } catch (error) {
      getToastError({ msg: "Có lỗi" })
      console.log(error)
    }
  }

  return { values, handleChange, handleSubmit, signInWithGoogle }
}

const SignUp: React.FC = () => {
  useScrollTop()
  const { values, handleChange, handleSubmit, signInWithGoogle } = useSignUpForm({
    email: "",
    password: "",
  })

  return (
    <div className={clsx("is-center", style.wrapper)}>
      <PopperWrapper customClass={style.container} onClick={(e) => e.stopPropagation()}>
        <TabWrapper customClass="is-center">
          <TabNav small to={`/${LOGIN}`}>
            Đăng nhập
          </TabNav>
          <TabNav small to={`/${SIGN_UP}`}>
            Đăng kí
          </TabNav>
        </TabWrapper>

        <div className={style.main}>
          <form className={clsx("is-center", style.vertical)} onSubmit={handleSubmit}>
            <input
              required
              type="email"
              name="email"
              className={style.input}
              placeholder="Nhập email của bạn"
              value={values.email}
              onChange={handleChange}
            />
            <input
              required
              type="password"
              name="password"
              className={style.input}
              placeholder="Nhập password của bạn"
              value={values.password}
              onChange={handleChange}
            />
            <ButtonTitle primary rounded>
              Gửi
            </ButtonTitle>
          </form>

          <div className={clsx("is-center", style.vertical)}>
            <div className={clsx("is-center", style.separate)}>hoặc</div>
            <GoogleButton type="light" label="Đăng kí bằng Google" onClick={signInWithGoogle} />
          </div>
        </div>
      </PopperWrapper>
    </div>
  )
}

export default SignUp
