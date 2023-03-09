import clsx from "clsx";
import React from "react";

import images from "../../assets/images";
import Image from "../../components/Image";
import style from "./Personal.module.scss";

const Empty: React.FC = () => {
  return (
    <div className={clsx("is-center", style.emptyContainer)}>
      <Image src={images.background.emptyAlbumDark} />
      <div className={style.text}>Danh sách trống</div>
    </div>
  );
};

export default Empty;
