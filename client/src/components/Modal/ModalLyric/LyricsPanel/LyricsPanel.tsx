import clsx from "clsx"
import React from "react"

import { useAppSelector } from "../../../../hooks/useRedux"
import Image from "../../../Image"
import Lyric from "../../../Lyric"
import style from "./LyricsPanel.module.scss"

const LyricsPanel: React.FC = () => {
  const { thumbnailM } = useAppSelector((state) => state.song)

  return (
    <div className={clsx("grid", style.wrapper)}>
      <div className='row'>
        <div className='col l-5 m-0 c-0 '>
          <div className='is-center'>
            <Image src={thumbnailM} className={style.image} />
          </div>
        </div>
        <div className='col l-7 m-12 c-12'>
          <Lyric />
        </div>
      </div>
    </div>
  )
}
export default LyricsPanel
