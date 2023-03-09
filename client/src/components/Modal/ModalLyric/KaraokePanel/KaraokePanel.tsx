import clsx from "clsx";
import React from "react";

import Lyric from "../../../Lyric";
import style from "./KaraokePanel.module.scss";

const KaraokePanel: React.FC = () => {
  return (
    <div className={clsx("is-center", style.wrapper)}>
      <Lyric />
    </div>
  );
};
export default KaraokePanel;
