/* eslint-disable react/display-name */
import clsx from "clsx";
import { forwardRef, useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import images from "../../assets/images";
import { useAppSelector } from "../../hooks/useRedux";
import style from "./Image.module.scss";
import { ImageState, Ref } from "./interface";

const Image = forwardRef<Ref, ImageState>(
  ({ src = "", alt = "", rounded, className = "", fallback = "" }, ref: any) => {
    const ImageRef = useRef<HTMLImageElement>(ref);
    if (src.endsWith("/")) src = "";

    const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton);
    return (
      <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <div className={clsx(style.wrapper, { [style.rounded]: rounded }, className)}>
          {src ? (
            <img src={src || fallback || images.noImage} alt={alt} ref={ImageRef} className={style.image} />
          ) : (
            <Skeleton height='100%' circle={rounded} />
          )}
        </div>
      </SkeletonTheme>
    );
  },
);

export default Image;
