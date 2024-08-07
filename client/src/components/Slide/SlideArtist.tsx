import React from "react"
import { Link } from "react-router-dom"

import Image from "../image"
import { SlideWrapper } from "../wrapper"
import ARTISTS from "./data"
import style from "./SlideArtist.module.scss"

const SlideArtist: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <SlideWrapper>
        {ARTISTS.map((item, i) => (
          <Link to={item.link} key={`slide-artist-${item.id}-${i}`}>
            <Image src={item.cover} alt={item.name} className={style.image} />
          </Link>
        ))}
      </SlideWrapper>
    </div>
  )
}

export default SlideArtist
