import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import { DETAIL_PLAY_LIST, RADIO } from "../../constants";
import { AlphaCard } from "../Alpha";
import Image from "../Image";
import { SubTitle, Title } from "../Info";
import style from "./CardRadio.module.scss";

interface IProps {
  title: string;
  encodeId: string;
  thumbnailM: string;
  subTitle: string | number;
  customClass?: string;
}

const CardRadio: React.FC<IProps> = ({ encodeId, title, thumbnailM, subTitle, customClass }) => {
  return (
    <div className={clsx(style.card, customClass)}>
      <Link to={`${RADIO}/${encodeId}`}>
        <figure className={style.cardTop}>
          <Image className={style.image} src={thumbnailM} />
          {encodeId && <AlphaCard rounded customClass={style.alpha} />}
        </figure>
        <Image className={style.imageHost} src={thumbnailM} rounded />
      </Link>

      <div className={style.cardContent}>
        <Link to={`${DETAIL_PLAY_LIST}/${encodeId}`}>
          <Title title={title} customClass={style.title} lineCamp={1} />
        </Link>
        <SubTitle subTitle={subTitle} customClass={style.subtitle} lineCamp={1} />
      </div>
    </div>
  );
};

export default CardRadio;
