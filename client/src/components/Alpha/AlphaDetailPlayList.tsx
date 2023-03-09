import clsx from "clsx";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

import images from "../../assets/images";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setPlay } from "../../redux/reducers/controlSlice";
import { IconLoading } from "../Icons";
import Image from "../Image";
import style from "./AlphaDetailPlayList.module.scss";

interface IProps {
  customClass: string;
}

const AlphaDetailPlayList: React.FC<IProps> = ({ customClass }) => {
  const dispatch = useAppDispatch();
  const { isPlay, isLoading } = useAppSelector((state) => state.control);
  const className = clsx(style.wrapper, customClass);

  const handlePlay = () => {
    dispatch(setPlay(!isPlay));
  };
  return (
    <div className={className}>
      <figure className={"is-center is-relative-1"} onClick={handlePlay}>
        {isLoading ? (
          <IconLoading className={style.iconLoading} />
        ) : isPlay ? (
          <Image src={images.icon.playing} className={style.iconAudio} />
        ) : (
          <BsPlayCircle className={style.iconPlay} />
        )}
      </figure>
    </div>
  );
};

export default AlphaDetailPlayList;
