import React, { useRef, useState } from "react"

import Time from "../../../../components/Time"
import { useAudioControls, useChangeSong, useProgress } from "../../../../hooks"
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux"
import { setCurrentTime as setTime } from "../../../../redux/reducers/currentTimeSlice"
import style from "./PlayerDuration.module.scss"

const PlayerDuration: React.FC = () => {
  const dispatch = useAppDispatch()
  const audioRef = useRef<HTMLAudioElement>(null)
  const { isPlaying, isLooping } = useAppSelector((state) => state.control)
  const { currentTime } = useAppSelector((state) => state.currentTime)
  const { volume } = useAppSelector((state) => state.volume)
  const { encodeId, duration, source } = useAppSelector((state) => state.song)
  const [isSeeking, setIsSeeking] = useState<boolean>(false)
  const [processValue, setProcessValue] = useState<number>(0)
  const handleChangeSong = useChangeSong()

  useAudioControls(audioRef, isPlaying, volume, encodeId)

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch(setTime(audioRef.current.currentTime))
    }
  }

  const handleChangeProgress = (e: any) => {
    setProcessValue(Number.parseInt(e.target.value))
  }

  const handleSeekTime = (e: any) => {
    setIsSeeking(false)
    if (audioRef.current) {
      const seekTime = (Number.parseInt(e.target.value) * audioRef.current.duration) / 100
      audioRef.current.currentTime = seekTime
    }
  }

  const progressWidth = useProgress(audioRef, isSeeking, processValue)

  const handleSongEnd = () => {
    return isLooping ? audioRef.current?.play() : handleChangeSong("next")
  }

  return (
    <div className={style.playerBar}>
      <Time duration={currentTime} />
      <div className={style.progress}>
        <input
          type="range"
          step={1}
          min={0}
          max={100}
          className={style.range}
          onChange={handleChangeProgress}
          onMouseDown={() => setIsSeeking(true)}
          onTouchStart={() => setIsSeeking(true)}
          onMouseUp={(e) => handleSeekTime(e)}
          onTouchEnd={(e) => handleSeekTime(e)}
        />
        <div className={style.track}>
          <div className={style.trackUpdate} style={{ width: `${progressWidth}%` }} />
        </div>
      </div>
      <Time duration={duration} />
      <audio
        ref={audioRef}
        id="audio"
        src={source}
        loop={isLooping}
        autoPlay={isPlaying}
        onPlay={() => audioRef.current?.play()}
        onPause={() => audioRef.current?.pause()}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      />
    </div>
  )
}

export default PlayerDuration
