import clsx from "clsx";
import DOMPurify from "dompurify";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { useAppSelector } from "../../hooks/useRedux";
import style from "./Paragraph.module.scss";

interface IProps {
  children: string;
  customClass?: string;
}
const Paragraph: React.FC<IProps> = ({ children, customClass }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton);

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {/* use DOMPurify to remove <br> tags */}
      <p className={clsx(style.paragraph, customClass)}>
        {children ? DOMPurify.sanitize(children, { FORBID_TAGS: ["br"] }) : <Skeleton height='100%' />}
      </p>
    </SkeletonTheme>
  );
};

export default Paragraph;
