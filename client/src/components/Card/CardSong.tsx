import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import { DETAIL_PLAY_LIST } from "../../constants";
import { AlphaCard } from "../Alpha";
import Image from "../Image";
import { SubTitle, Title } from "../Info";
import style from "./CardSong.module.scss";

interface IProps {
  title: string;
  encodeId: string;
  thumbnailM: string;
  subTitle: string | number;
  customClass?: string;
}
const CardSong: React.FC<IProps> = ({ encodeId, title, thumbnailM, subTitle, customClass }) => {
  return (
    <div className={clsx(style.card, customClass)}>
      <Link to={`${DETAIL_PLAY_LIST}/${encodeId}`}>
        <figure className={style.cardTop}>
          <Image className={style.image} src={thumbnailM} />
          {encodeId && <AlphaCard customClass={style.alpha} />}
        </figure>
      </Link>

      <div className={style.cardContent}>
        <Link to={`${DETAIL_PLAY_LIST}/${encodeId}`}>
          <Title title={title} customClass={style.title} lineCamp={2} hoverColor />
        </Link>
        {subTitle && <SubTitle subTitle={subTitle} customClass={style.subtitle} lineCamp={1} />}
      </div>
    </div>
  );
};

export default CardSong;
