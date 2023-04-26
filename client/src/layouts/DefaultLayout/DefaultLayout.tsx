import clsx from "clsx";
import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

import ModalLyric from "../../components/Modal/ModalLyric";
import ModalPlayList from "../../components/Modal/ModalPlayList";
import ModalTheme from "../../components/Modal/ModalTheme";
import { useAppSelector } from "../../hooks/useRedux";
import { currentThemeSelector } from "../../redux/selectors/themeSelector";
import Header from "../components/Header";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import style from "./DefaultLayout.module.scss";

interface IProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<IProps> = ({ children }) => {
  const headerRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const currentTheme = useAppSelector(currentThemeSelector);

  const handleScroll = () => {
    const offsetContent = containerRef.current.scrollY || containerRef.current.scrollTop;
    if (offsetContent > 10) {
      headerRef.current.sticky();
    } else {
      headerRef.current.nonSticky();
    }
  };

  return (
    <div
      className={clsx("app", currentTheme.className)}
      style={{ backgroundImage: currentTheme.containerTheme ? `url(${currentTheme.containerTheme})` : "none" }}
    >
      <div className={clsx(style.wrapper)}>
        <Header ref={headerRef} />
        <div className={style.body}>
          <Sidebar />
          <div id='container' className={clsx("scrollbar", style.container)} ref={containerRef} onScroll={handleScroll}>
            <div className={style.main}>{children}</div>
          </div>
        </div>
        <Player />

        {/* Modal */}
        <ModalTheme />
        <ModalLyric />
        <ModalPlayList />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} theme='dark' />
      </div>
    </div>
  );
};

export default DefaultLayout;
