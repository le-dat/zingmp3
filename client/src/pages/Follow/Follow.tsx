import React from "react";
import { Helmet } from "react-helmet-async";

import { SlideArtist } from "../../components/Slide";
import { useScrollTop } from "../../hooks";
import style from "./Follow.module.scss";

const Follow: React.FC = () => {
  useScrollTop();

  return (
    <>
      <Helmet>
        <title>Nghệ sĩ | Xem bài hát, album</title>
      </Helmet>

      <div className={style.wrapper}>
        <SlideArtist />
      </div>
    </>
  );
};

export default Follow;
