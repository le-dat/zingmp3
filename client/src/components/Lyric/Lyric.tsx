import { AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { useAppSelector } from "../../hooks/useRedux"
import { setIsLyricSong } from "../../redux/reducers/lyricSlice"
import * as services from "../../services"
import { Sentence } from "./interface"
import RenderLyric from "./RenderLyric"

const Lyric: React.FC = () => {
  const dispatch = useDispatch()
  const [lyric, setLyric] = useState<Sentence[] | undefined>(undefined)
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
