/* eslint-disable react/display-name */
import clsx from "clsx";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { ButtonIcon } from "../../../components/Button";
import style from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearch from "./HeaderSearch";

interface Ref {
  ref?: any;
}
const Header = forwardRef<Ref>((props, ref) => {
  const headerRef = useRef<any>(ref);
  const navigate = useNavigate();

  useImperativeHandle<Ref, any>(ref, () => ({
    sticky() {
      headerRef.current.style.backgroundColor = "var(--color-layout)";
      headerRef.current.style.boxShadow = "0 3px 3px var(--color-border)";
    },
    nonSticky() {
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.boxShadow = "none";
    },
  }));

  return (
    <div className={style.header} ref={headerRef}>
      <div className={clsx("is-relative-1", style.container)}>
        <div className={style.search}>
          <ButtonIcon icon={<BsArrowLeft />} onClick={() => navigate(-1)} customClass={style.icon} />
          <ButtonIcon icon={<BsArrowRight />} onClick={() => navigate(1)} customClass={style.icon} />
          <HeaderSearch />
        </div>
        <HeaderNavigation />
      </div>
    </div>
  );
});

export default Header;
