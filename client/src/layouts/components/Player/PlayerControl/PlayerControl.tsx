import clsx from "clsx"
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs"
import { CiRepeat } from "react-icons/ci"
import { FaRandom } from "react-icons/fa"
import { MdSkipNext, MdSkipPrevious } from "react-icons/md"

import { ButtonIcon } from "../../../../components/Button"
import { IconLoading } from "../../../../components/Icons"
import { useChangeSong } from "../../../../hooks"
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux"
import { setLoop, setPlay, setRandom } from "../../../../redux/reducers/controlSlice"
import style from "./PlayerControl.module.scss"

const PlayerControl: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isPlay, isRandom, isLoop, isLoading } = useAppSelector((state) => state.control)
  const handleChangeSong = useChangeSong()

  return (
    <div className={style.controller}>
      <ButtonIcon
        icon={<FaRandom />}
        title={`${isRandom ? "Tắt" : "Bật"} chế độ ngẫu nhiên`}
        rounded
        backgroundSmall
        customClass={clsx(style.icon, style.iconRandom, { [style.active]: isRandom })}
        onClick={() => dispatch(setRandom(!isRandom))}
      />
      <ButtonIcon
        icon={<MdSkipPrevious />}
        rounded
        backgroundSmall
        disable={isLoading}
        customClass={clsx(style.icon, style.iconPre)}
        onClick={() => handleChangeSong("prev")}
      />
      <ButtonIcon
        rounded
        icon={isLoading ? <IconLoading className={style.iconSpinner} /> : isPlay ? <BsPauseCircle /> : <BsPlayCircle />}
        disable={isLoading}
        customClass={clsx(style.icon, style.iconPlay)}
        onClick={() => dispatch(setPlay(!isPlay))}
      />
      <ButtonIcon
        icon={<MdSkipNext />}
        rounded
        backgroundSmall
        disable={isLoading}
        customClass={clsx(style.icon, style.iconNext)}
        onClick={() => handleChangeSong("next")}
      />
      <ButtonIcon
        icon={<CiRepeat />}
        title={`${isLoop ? "Tắt" : "Bật"} chế độ lặp lại`}
        rounded
        backgroundSmall
        customClass={clsx(style.icon, style.iconLoop, { [style.active]: isLoop })}
        onClick={() => dispatch(setLoop(!isLoop))}
      />
    </div>
  )
}

export default PlayerControl
