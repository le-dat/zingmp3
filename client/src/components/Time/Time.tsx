import clsx from "clsx";
import format from "format-duration";
import React from "react";

import style from "./Time.module.scss";

interface IProps {
  duration: number;
  active?: boolean;
  className?: string;
}

const Time: React.FC<IProps> = ({ duration = 0, active, className }) => {
  return (
    <div className={clsx(style.time, { [style.active]: active }, className)}>
      {format(duration * 1000, { leading: true })}
    </div>
  );
};

export default Time;
