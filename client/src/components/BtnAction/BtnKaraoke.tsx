import React from "react";
import { GiMicrophone } from "react-icons/gi";

import { useAppDispatch } from "../../hooks/useRedux";
import { setShowLyricSongModal } from "../../redux/reducers/lyricSlice";
import { ButtonIcon } from "../Button";

interface IProps {
  title?: string;
  disable?: boolean;
  customClass?: string;
}
const BtnKaraoke: React.FC<IProps> = ({ title = "Xem lời bài hát", disable, customClass }) => {
  const dispatch = useAppDispatch();

  const handleLyric = () => {
    dispatch(setShowLyricSongModal(true));
  };

  return (
    <ButtonIcon
      backgroundSmall
      rounded
      disable={disable}
      icon={<GiMicrophone />}
      title={title}
      customClass={customClass}
      onClick={handleLyric}
    />
  );
};

export default BtnKaraoke;
