import clsx from "clsx"
import { VscMute, VscUnmute } from "react-icons/vsc"

import { ButtonIcon } from "../../../../components/button"
import { useVolumeControl } from "../../../../hooks"
import { useAppSelector } from "../../../../hooks/useRedux"
import style from "./PlayerVolume.module.scss"

const PlayerVolume: React.FC = () => {
  const { volume } = useAppSelector((state) => state.volume)
  const { handleChangeVolume, handleMute } = useVolumeControl(volume)

  return (
    <div className={style.duration}>
      <ButtonIcon
        icon={volume === 0 ? <VscMute /> : <VscUnmute />}
        backgroundSmall
        rounded
        customClass={clsx(style.icon, { [style.active]: volume !== 0 })}
        onClick={handleMute}
      />
      <div className={style.volume}>
        <div className={style.progress}>
          <input
            type="range"
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
