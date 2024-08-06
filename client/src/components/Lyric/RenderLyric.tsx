import clsx from "clsx"
import React, { LegacyRef, useEffect, useRef, useState } from "react"

import { useAppSelector } from "../../hooks/useRedux"
import style from "./RenderLyric.module.scss"
import { Sentence } from "./interface"

interface RenderLyricProps {
  lyric: Sentence[] | undefined
}

const RenderLyric: React.FC<RenderLyricProps> = ({ lyric }) => {
  const lyricRef: LegacyRef<HTMLParagraphElement> | undefined = useRef(null)
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(false)
  const currentTime = useAppSelector((state) => state.currentTime.currentTime) * 1000

  useEffect(() => {
    let scrollOptions: ScrollIntoViewOptions = {}
    if (!isScrollSmooth) {
      scrollOptions = {
        inline: "center",
        block: "center",
      }
      setIsScrollSmooth(true)
    } else {
      scrollOptions = {
        behavior: "smooth",
        inline: "center",
        block: "center",
      }
    }
    lyricRef?.current?.scrollIntoView(scrollOptions)
  }, [currentTime, isScrollSmooth])

  return (
    <div className={clsx("scrollbar", style.wrapper)}>
      {lyric?.map((sentence, index) => {
        const words = sentence.words
        if (!words) return <></>
        const isActive = words[0].startTime <= currentTime && currentTime <= words[words.length - 1].endTime
        return (
          <p
            ref={isActive ? lyricRef : undefined}
            className={clsx(style.paragraph, { [style.active]: isActive })}
            key={index}
          >
            {words.map((word, wordIndex) => {
              const isWordActive = word.startTime <= currentTime && currentTime <= word.endTime
              return (
                <span key={wordIndex} className={clsx(style.word, { [style.active]: isWordActive })}>
                  {word.data}
                </span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}

export default RenderLyric
