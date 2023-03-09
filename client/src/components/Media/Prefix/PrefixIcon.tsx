import clsx from "clsx";
import React from "react";
import { HiOutlineMusicalNote } from "react-icons/hi2";

import style from "./Prefix.module.scss";

const PrefixIcon: React.FC = () => {
  return (
    <div className={clsx("is-center", style.prefixIcon)}>
      <HiOutlineMusicalNote />
    </div>
  );
};

export default PrefixIcon;
