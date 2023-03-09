import clsx from "clsx";
import React, { memo } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { MediaIProps } from "../../interface";
import { setInfoSong } from "../../redux/reducers/songSlice";
import { getToastWarn } from "../../utils/toast";
import { AlphaMedia } from "../Alpha";
import { BtnHeartSong, BtnKaraoke, BtnThreeDotMedia } from "../BtnAction";
import Image from "../Image";
import { SubTitle, Title } from "../Info";
import Time from "../Time";
import style from "./Media.module.scss";
import { PrefixIcon, PrefixNum, PrefixTitle } from "./Prefix";

interface IProps extends MediaIProps {
  prefixIndex?: number;
  prefixPromote?: boolean;
  prefixIcon?: boolean;
  iconHeart?: boolean;
  iconKaraoke?: boolean;
  iconThreeDots?: boolean;
  time?: boolean;
  small?: boolean;
}
const Media: React.FC<IProps> = ({
  encodeId,
  thumbnailM,
  title,
  artists,
  duration,
  streamingStatus,
  album,
  prefixIndex,
  prefixPromote,
  prefixIcon,
  small,
  iconHeart,
  iconKaraoke,
  iconThreeDots,
  time,
}) => {
  const dispatch = useAppDispatch();
  const props = { encodeId, title, thumbnailM, artists, duration, streamingStatus, album };
  const { encodeId: id } = useAppSelector((state) => state.song);
  const className = clsx(style.media, {
    [style.action]: encodeId === id && encodeId !== "",
    [style.small]: small,
    [style.vip]: streamingStatus === 2,
  });

  const handlePlaySong = async () => {
    if (encodeId !== "") {
      return streamingStatus === 1
        ? dispatch(setInfoSong({ encodeId, thumbnailM, title, artists, duration, album, streamingStatus }))
        : getToastWarn({ msg: "Bài này dành cho tài khoản vip !" });
    }
  };

  const CardInfo = () => {
    return (
      <div className={style.songCard}>
        <div className={style.header}>
          <Title title={title} customClass={style.title} />
          {streamingStatus === 2 && <div className={style.vipBlock}>VIP</div>}
        </div>
        <SubTitle artists={artists} hoverColor customClass={style.subTitle} lineCamp={1} />
      </div>
    );
  };

  return (
    <div className={className}>
      <div className={style.mediaLeft}>
        {prefixPromote && <PrefixTitle title='Gợi ý' />}
        {prefixIndex && <PrefixNum index={prefixIndex} small={small} />}
        {prefixIcon && <PrefixIcon />}

        <div className={style.songThumbWrapper} onClick={handlePlaySong}>
          <Image src={thumbnailM} alt={title} className={style.songThumb} />
          {streamingStatus === 1 && <AlphaMedia customClass={style.alpha} playing={encodeId === id} />}
        </div>
        {!small && <CardInfo />}
      </div>

      {small && <CardInfo />}
      {!small && (
        <div className={style.mediaContent}>
          <span className={style.albumInfo}>{title}</span>
        </div>
      )}

      <div className={style.mediaRight}>
        {time && <Time className={style.time} duration={duration} />}
        {/* hover */}
        <div className={style.level}>
          {iconKaraoke && <BtnKaraoke disable={encodeId === ""} customClass={style.levelItem} />}
          {iconHeart && <BtnHeartSong disable={encodeId === ""} customClass={style.levelItem} song={props} />}
          {iconThreeDots && <BtnThreeDotMedia disable={encodeId === ""} customClass={style.levelItem} {...props} />}
        </div>
      </div>
    </div>
  );
};

export default memo(Media);
