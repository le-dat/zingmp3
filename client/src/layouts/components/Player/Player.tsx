import { useEffect } from "react"

import { BtnKaraoke, BtnMV, BtnToggleList, BtnView } from "../../../components/btn-action"
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux"
import { setFirstMounting, setLoading, setPlaying } from "../../../redux/reducers/controlSlice"
import { setSource } from "../../../redux/reducers/songSlice"
import { currentThemeSelector } from "../../../redux/selectors/themeSelector"
import * as services from "../../../services"
import { getToastWarn } from "../../../utils/toast"
import style from "./Player.module.scss"
import PlayerControl from "./player-control"
import PlayerDuration from "./player-duration"
import PlayerSongInfo from "./player-song-info"
import PlayerVolume from "./player-volume"

interface ResponseIProps {
  128: string
}

const Player: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(currentThemeSelector)
  const { encodeId } = useAppSelector((state) => state.song)
  const { isFirstMounting } = useAppSelector((state) => state.control)

  // get source audio
  useEffect(() => {
    const fetchApi = async () => {
      dispatch(setLoading(true))
      dispatch(setPlaying(false))
      const res: ResponseIProps = await services.getSong(encodeId)
      if (res?.[128].startsWith("https")) {
        dispatch(setSource(res[128]))
        dispatch(setLoading(false))
        if (isFirstMounting) {
          dispatch(setPlaying(true))
        } else {
          // first mounting
          dispatch(setFirstMounting(true))
        }
      } else {
        // continue playing previous song
        dispatch(setPlaying(true))
        getToastWarn({ msg: "Bài này dành cho tài khoản vip !" })
      }
    }
    if (encodeId !== "") fetchApi()
  }, [encodeId])

  if (encodeId === "") return null

  return (
    <div
      className={style.wrapper}
      style={{ backgroundImage: currentTheme.playerTheme ? `url("${currentTheme.playerTheme}")` : "none" }}
    >
      <div className={style.container}>
        <PlayerSongInfo />

        <div className={style.playerControl}>
          <PlayerControl />
          <PlayerDuration />
        </div>

        <div className={style.options}>
          <BtnMV customClass={style.icon} disable />
          <BtnKaraoke customClass={style.icon} />
          <BtnView customClass={style.icon} disable />
          <PlayerVolume />
          <BtnToggleList customClass={style.icon} />
        </div>
      </div>
    </div>
  )
}

export default Player
