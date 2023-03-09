import React from "react";

import style from "./Prefix.module.scss";

interface IProps {
  title: string;
}
const PrefixTitle: React.FC<IProps> = ({ title = "Gợi ý" }) => {
  return (
    <div className={style.prefix}>
      <span className={style.prefixPromote}>{title}</span>
    </div>
  );
};

export default PrefixTitle;
