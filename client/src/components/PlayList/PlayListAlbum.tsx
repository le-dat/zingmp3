import clsx from "clsx";
import React from "react";

import { AlbumIProps } from "../../interface";
import { CardAlbum } from "../Card";
import HeaderPlayList from "../HeaderPlayList";
import style from "./PlayList.module.scss";

interface IProps {
  data: AlbumIProps[];
  title?: string;
}
const PlayListAlbum: React.FC<IProps> = ({ data, title = "Gợi ý cho bạn" }) => {
  return (
    <div className='grid'>
      <HeaderPlayList title={title} small customClass={style.title} />
      <div className={clsx("row", style.list)}>
        {data.map((item, i) => (
          <div key={`${item.encodeId}-${i}`} className={clsx("col l-2-4 m-3 c-4", style.card)}>
            <CardAlbum
              encodeId={item.encodeId}
              title={item.title}
              thumbnailM={item.thumbnailM}
              subTitle={item.releaseDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayListAlbum;
