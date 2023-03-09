import React from "react";
import clsx from "clsx";

import style from "./SidebarAdvertise.module.scss";

interface IProps {
  title?: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const SidebarAdvertise: React.FC<IProps> = ({ title = "", description = "", onClick }) => {
  return (
    <div className={clsx(style.wrapper)}>
      <div className={style.container}>
        <p className={style.description}>{description}</p>
        <button className={style.btn} onClick={onClick}>
          {title}
        </button>
      </div>
    </div>
  );
};

export default SidebarAdvertise;
