import clsx from "clsx"
import { useRef } from "react"
import { VscMute, VscUnmute } from "react-icons/vsc"

import { ButtonIcon } from "../../../../components/Button"
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux"
import { setVolume } from "../../../../redux/reducers/volumeSlice"
import style from "./PlayerVolume.module.scss"

const PlayerVolume: React.FC = () => {
  const dispatch = useAppDispatch()
  const { volume } = useAppSelector((state) => state.volume)
  const preVolume = useRef<any>(volume || 100)

  const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(Number.parseInt(e.target.value)))
  }

  const handleClickVolumeButton = () => {
    const volumeValue = volume > 0 ? 0 : preVolume.current
    if (volume > 0) {
      preVolume.current = volume
    }
    dispatch(setVolume(volumeValue))
  }

  return (
    <div className={style.duration}>
      <ButtonIcon
        icon={volume === 0 ? <VscMute /> : <VscUnmute />}
        backgroundSmall
        rounded
        customClass={clsx(style.icon, { [style.active]: volume !== 0 })}
        onClick={handleClickVolumeButton}
      />
      <div className={style.volume}>
        <div className={style.progress}>
          <input
            type='range'
            step={1}
            min={0}
            max={100}
            value={volume}
            className={style.range}
            onChange={handleChangeVolume}
          />
          <div className={style.track}>
            <div className={style.trackUpdate} style={{ width: `${volume}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerVolume
