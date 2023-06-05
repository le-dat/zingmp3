import clsx from "clsx"
import { AnimatePresence } from "framer-motion"
import React, { LegacyRef, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

import { useAppSelector } from "../../hooks/useRedux"
import { setIsLyricSong } from "../../redux/reducers/lyricSlice"
import * as services from "../../services"
import style from "./Lyric.module.scss"

const Lyric: React.FC = () => {
  const dispatch = useDispatch()
  const [lyric, setLyric] = useState<any[] | undefined>(undefined)
  const { encodeId } = useAppSelector((state) => state.song)
  const { isLyric } = useAppSelector((state) => state.lyric)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsLyricSong(false))
      const res = await services.getLyric(encodeId)

      if (res.sentences) {
        setLyric(res.sentences)
        dispatch(setIsLyricSong(true))
      }
    }
    if (encodeId) fetchData()
  }, [dispatch, encodeId])

  if (!isLyric) return <div className="is-center">Không có lời cho bài hát này</div>
  return <AnimatePresence>{isLyric && <RenderLyric lyric={lyric} />}</AnimatePresence>
}
export default Lyric

interface IProps {
  lyric: any[] | undefined
}
const RenderLyric: React.FC<IProps> = ({ lyric }) => {
  const lyricRef: LegacyRef<HTMLParagraphElement> | undefined = useRef(null)
  // state control smooth
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(false)
  // redux
  const currentTime = useAppSelector((state) => state.currentTime.currentTime) * 1000

  useEffect(() => {
    let arg: ScrollIntoViewOptions = {}
    // first time load
    if (!isScrollSmooth) {
      arg = {
        inline: "center",
        block: "center",
      }
      setIsScrollSmooth(true)
    } else {
      arg = {
        behavior: "smooth",
        inline: "center",
        block: "center",
      }
    }
    lyricRef?.current?.scrollIntoView(arg)
  }, [currentTime])

  return (
    <div className={clsx("scrollbar", style.wrapper)}>
      {lyric?.map((item: any, index: number) => {
        const words: any[] | undefined = item?.words
        if (!words) return <></>
        return (
          <p
            ref={
              words[0].startTime <= currentTime && currentTime <= words[words.length - 1].endTime ? lyricRef : undefined
            }
            className={clsx(style.paragraph, {
              [style.active]: words[0].startTime <= currentTime && currentTime <= words[words.length - 1].endTime,
            })}
            key={index}
          >
            {words.map((wordItem: any, wordIndex: number) => {
              return (
                <span
                  key={wordIndex}
                  className={clsx(style.word, {
                    [style.active]: wordItem?.startTime <= currentTime && currentTime <= wordItem?.endTime,
                  })}
                >
                  {wordItem?.data}
                </span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}
