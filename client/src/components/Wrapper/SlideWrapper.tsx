import React, { useRef } from "react"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import style from "./SlideWrapper.module.scss"

interface IProps {
  pc?: number
  pcLow?: number
  tablet?: number
  mobile?: number
  children: React.ReactNode
}

const SlideWrapper: React.FC<IProps> = ({ pc = 7, pcLow = 6, tablet = 4, mobile = 3, children }) => {
  const slideRef = useRef<any>(null)

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: pc,
    slidesToScroll: pc,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: pcLow,
          slidesToScroll: pcLow,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: tablet,
          slidesToScroll: tablet,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: mobile,
          slidesToScroll: mobile,
        },
      },
    ],
  }
  return (
    <div className={style.wrapper}>
      <Slider ref={slideRef} className={style.slider} {...settings}>
        {children}
      </Slider>
      <button onClick={() => slideRef.current.slickPrev()} className={style.arrowPrev}>
        <GrFormPrevious />
      </button>
      <button onClick={() => slideRef.current.slickNext()} className={style.arrowNext}>
        <GrFormNext />
      </button>
    </div>
  )
}

export default SlideWrapper
