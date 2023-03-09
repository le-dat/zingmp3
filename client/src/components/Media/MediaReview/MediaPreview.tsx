import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../../hooks/useRedux";
import * as services from "../../../services";
import { formatFollower } from "../../../utils/common";
import { AlphaMedia } from "../../Alpha";
import { BtnFollow } from "../../BtnAction";
import { CardSong } from "../../Card";
import Image from "../../Image";
import style from "./MediaPreview.module.scss";

interface InfoIProps {
  thumbnail: string;
  thumbnailM: string;
  realname: string;
  link: string;
  totalFollow: number;
  follow: number;
  sortBiography: string;
  biography: string;
  sections: Array<any>;
}
interface IProps {
  artist: {
    alias: string;
  };
}
const MediaPreview: React.FC<IProps> = ({ artist }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton);
  const [info, setInfo] = useState<InfoIProps>({
    thumbnail: "",
    thumbnailM: "",
    realname: "",
    link: "/",
    totalFollow: 0,
    follow: 0,
    sortBiography: "",
    biography: "",
    sections: Array(2).fill({ items: Array(4).fill({}) }),
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.getArtist(artist?.alias);
      setInfo(res);
    };

    if (artist.alias) fetchData();
  }, []);

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className={style.content}>
        <div className={style.topContent}>
          <div className={style.media}>
            <div className={style.mediaLeft}>
              <Image className={style.image} src={info?.thumbnailM} fallback={info?.thumbnail} rounded />
              <AlphaMedia rounded customClass={style.bgHover} />
            </div>
            <div className={style.mediaContent}>
              <h3 className={style.title}>
                <Link to={info?.link}>{info?.realname || <Skeleton />}</Link>
              </h3>
              <h3 className={style.subtitle}>{formatFollower(info?.totalFollow || info?.follow)} quan tâm</h3>
            </div>

            <div className={style.mediaRight}>
              <BtnFollow primary />
            </div>
          </div>
        </div>

        <div className={style.bottomContent}>
          <div className={style.sortBiography}>{info?.sortBiography || info?.biography}</div>

          {info?.sections?.length > 0 && (
            <div className={clsx("grid", style.album)}>
              <h3 className={style.albumTitle}>Moi nhat</h3>

              <div className={clsx("row", style.albumList)}>
                {info?.sections[1 || 0]?.items.map(
                  (item: any, index: number) =>
                    index < 4 && (
                      <div key={`card-${item?.title}-${index}`} className={clsx("col l-3 m-3", style.albumItem)}>
                        <CardSong {...item} />
                      </div>
                    ),
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default MediaPreview;
