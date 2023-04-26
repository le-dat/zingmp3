import clsx from "clsx";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { useAppSelector } from "../../hooks/useRedux";
import style from "./Title.module.scss";

interface IProps {
  title: string;
  hoverColor?: boolean;
  hoverMove?: boolean;
  customClass?: string;
  lineCamp?: number;
  onClick?: () => void;
}
const Title: React.FC<IProps> = ({ title, hoverColor = false, hoverMove, lineCamp = 1, onClick, customClass }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton);

  const className = clsx(
    style.wrapper,
    `lineCamp-${lineCamp}`,
    {
      [style.hoverColor]: hoverColor,
      [style.hoverMove]: hoverMove,
    },
    customClass,
  );
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <h3 className={className} onClick={onClick}>
        <div>
          <span className={style.title}>{title || <Skeleton height={20 * lineCamp} />}</span>
          {hoverMove && <span className={style.title}>{title || <Skeleton height={20 * lineCamp} />}</span>}
        </div>
      </h3>
    </SkeletonTheme>
  );
};

export default Title;
