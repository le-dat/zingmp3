import clsx from "clsx";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { setShowThemeModal } from "../../../redux/reducers/themeSlice";
import { ButtonIcon } from "../../Button";
import { PopperWrapper } from "../../Wrapper";
import style from "./ModalTheme.module.scss";
import ThemeList from "./ThemeList";

const ModalTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isShowThemeModal } = useAppSelector((state) => state.theme);

  const handleCloseModal = () => {
    dispatch(setShowThemeModal(false));
  };

  return (
    <div className={clsx(style.wrapper, { [style.active]: isShowThemeModal })} onClick={handleCloseModal}>
      <PopperWrapper customClass={style.container} onClick={(e) => e.stopPropagation()}>
        <div className={style.heading}>
          <h3>Giao Diện</h3>
          <ButtonIcon title='Đóng' icon={<IoMdClose />} onClick={handleCloseModal} customClass={style.iconClose} />
        </div>
        <ThemeList />
      </PopperWrapper>
    </div>
  );
};

export default ModalTheme;
