import { toast } from "react-toastify"

interface IProps {
  msg?: string
}
const config = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const getToastSuccess = ({ msg = "Thành công !" }: IProps) => {
  return toast.success(msg, config)
}

export const getToastError = ({ msg = "Có lỗi !" }: IProps) => {
  return toast.error(msg, config)
}

export const getToastWarn = ({ msg = "Tính năng này chưa hoàn thiện !" }: IProps) => {
  return toast.warn(msg, config)
}
