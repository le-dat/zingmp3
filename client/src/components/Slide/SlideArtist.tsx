import React from "react";
import { Link } from "react-router-dom";

import Image from "../Image";
import { SlideWrapper } from "../Wrapper";
import ARTISTS from "./data";
import style from "./SlideArtist.module.scss";

const SlideArtist: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <SlideWrapper>
        {ARTISTS.map((item, i) => (
          <Link to={item.link} key={`slide-artist-${item.id}-${i}`} className={style.item}>
            <Image src={item.cover} alt={item.name} className={style.image} />
          </Link>
        ))}
      </SlideWrapper>
    </div>
  );
};

export default SlideArtist;
