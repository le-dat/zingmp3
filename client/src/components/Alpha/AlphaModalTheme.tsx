import clsx from "clsx";
import React from "react";

import { ButtonTitle } from "../Button";
import style from "./AlphaModalTheme.module.scss";

interface IProps {
  handleApply: () => void;
  handleTest: () => void;
  customClass?: string;
}
const AlphaModalTheme: React.FC<IProps> = ({ handleApply, handleTest, customClass }) => {
  return (
    <div className={clsx(style.wrapper, customClass)}>
      <ButtonTitle primary rounded onClick={handleApply} customClass={clsx("is-center", style.btn)}>
        Áp dụng
      </ButtonTitle>
      <ButtonTitle outline rounded onClick={handleTest} customClass={clsx("is-center", style.btn)}>
        Xem trước
      </ButtonTitle>
    </div>
  );
};

export default AlphaModalTheme;
