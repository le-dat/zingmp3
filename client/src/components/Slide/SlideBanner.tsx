import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import { Link } from "react-router-dom"

import { BannerIProps } from "../../interface"
import { formatLinkBanner } from "../../utils/common"
import Image from "../image"
import style from "./SlideBanner.module.scss"

interface SlideBannerProps {
  data: BannerIProps[]
}

const SlideBanner: React.FC<SlideBannerProps> = ({ data = Array(10).fill({}) }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const getNextIndex = (currentIndex: number, length: number): number => {
    return currentIndex >= length - 1 ? 0 : currentIndex + 1
  }

  const getPrevIndex = (currentIndex: number, length: number): number => {
    return currentIndex === 0 ? length - 1 : currentIndex - 1
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => getNextIndex(prevIndex, data.length))
  }

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => getPrevIndex(prevIndex, data.length))
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(handleNext, 4000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentImageIndex])

  return (
    <div className={clsx("is-center", style.slider)}>
      <button onClick={handleNext} className={clsx("is-center", style.btnNext)}>
        <GrNext />
      </button>
      <button onClick={handlePrev} className={clsx("is-center", style.btnPrev)}>
        <GrPrevious />
      </button>

      {data.map((bannerItem, index) => (
        <Link
          to={bannerItem?.type === 4 ? formatLinkBanner(bannerItem.encodeId) : ""}
          key={`banner-${index}`}
          className={clsx(style.block, {
            [style.current]: index === currentImageIndex,
            [style.prev]: currentImageIndex - 1 < 0 ? index === data.length - 1 : index === currentImageIndex - 1,
            [style.next]: currentImageIndex + 1 >= data.length ? index === 0 : index === currentImageIndex + 1,
          })}
        >
          <Image src={bannerItem.banner} alt={bannerItem?.description} className={style.image} />
        </Link>
      ))}
    </div>
  )
}

export default SlideBanner
