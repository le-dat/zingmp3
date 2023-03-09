import clsx from "clsx";
import React from "react";

import { ArtistIProps } from "../../interface";
import CardArtist from "../Card/CardArtist";
import HeaderPlayList from "../HeaderPlayList";
import style from "./PlayList.module.scss";

interface IProps {
  data: ArtistIProps[];
  title?: string;
}
const PlayListArtist: React.FC<IProps> = ({ data, title = "Gợi ý cho bạn" }) => {
  return (
    <div className='grid'>
      <HeaderPlayList title={title} small customClass={style.title} />
      <div className={clsx("row", style.list)}>
        {data.map((item, i) => (
          <div key={`card-artist-${i}`} className={clsx("col l-2-4 m-3 c-4", style.card)}>
            <CardArtist {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayListArtist;
