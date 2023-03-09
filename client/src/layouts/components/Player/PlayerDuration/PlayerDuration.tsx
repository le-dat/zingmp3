import React, { useEffect, useMemo, useRef, useState } from "react"

import Time from "../../../../components/Time"
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux"
import { setCurrentTime as setTime } from "../../../../redux/reducers/currentTimeSlice"
import { setSongIndex } from "../../../../redux/reducers/playListSlice"
import { setInfoSong } from "../../../../redux/reducers/songSlice"
import { getNewIndex, getRandomIndex } from "../../../../utils/song"
import style from "./PlayerDuration.module.scss"

const PlayerDuration: React.FC = () => {
  const dispatch = useAppDispatch()
  const audioRef = useRef<HTMLAudioElement>(null)
  const { isPlay, isLoop, isRandom } = useAppSelector((state) => state.control)
  const { currentTime } = useAppSelector((state) => state.currentTime)
  const { volume } = useAppSelector((state) => state.volume)
  const { encodeId, duration, source } = useAppSelector((state) => state.song)
  const [isSeeking, setIsSeeKing] = useState<boolean>(false)
  const [processValue, setProcessValue] = useState<number>(0)
  const { songIndex, playListSong } = useAppSelector((state) => state.playList)

  // set play audio
  useEffect(() => {
    if (isPlay) handlePlay()
    else handlePause()
  }, [isPlay, encodeId])

  // set volume audio
  useEffect(() => {
    if (audioRef?.current) audioRef.current.volume = volume / 100
  }, [volume])

  const handlePlay = () => audioRef.current?.play()
  const handlePause = () => audioRef.current?.pause()

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch(setTime(audioRef.current.currentTime))
    }
  }
  const handleChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessValue(Number.parseInt(e.target.value))
  }
  const handleSeekTime = (e: any) => {
    setIsSeeKing(false)
    if (audioRef.current) {
      const seekTime = (Number.parseInt(e.target.value) * audioRef.current.duration) / 100
      audioRef.current.currentTime = seekTime
    }
  }
  const progressWidth = useMemo(() => {
    if (audioRef.current) {
      const width = isSeeking
        ? processValue
        : Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) || 0
      return width
    }
  }, [isSeeking, currentTime, processValue])

  const handleChangeSong = (direction: string) => {
    let newSongIndex
    if (isRandom) {
      newSongIndex = getRandomIndex(playListSong, songIndex)
    } else {
      newSongIndex = getNewIndex(playListSong, songIndex, direction)
    }
    dispatch(setSongIndex(newSongIndex))
    const { encodeId, thumbnailM, title, artists, duration, album, streamingStatus } = playListSong[newSongIndex]
    dispatch(setInfoSong({ encodeId, thumbnailM, title, artists, duration, album, streamingStatus }))
  }

  const handleSongEnd = () => {
    if (isLoop) handlePlay()
    handleChangeSong("next")
  }

  return (
    <div className={style.playerBar}>
      <Time duration={currentTime} />
      <div className={style.progress}>
        <input
          type='range'
          step={1}
          min={0}
          max={100}
          className={style.range}
          onChange={handleChangeProgress}
          onMouseDown={() => setIsSeeKing(true)}
          onTouchStart={() => setIsSeeKing(true)}
          onMouseUp={handleSeekTime}
          onTouchEnd={handleSeekTime}
        />
        <div className={style.track}>
          <div className={style.trackUpdate} style={{ width: `${progressWidth}%` }} />
        </div>
      </div>
      <Time duration={duration} />

      <audio
        ref={audioRef}
        id='audio'
        src={source}
        loop={isLoop}
        autoPlay={isPlay}
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      />
    </div>
  )
}

export default PlayerDuration
