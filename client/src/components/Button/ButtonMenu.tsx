import HeadlessTippy from "@tippyjs/react/headless";
import clsx from "clsx";
import React, { useState } from "react";

import Menu from "../Menu";
import { PopperWrapper } from "../Wrapper";
import style from "./ButtonMenu.module.scss";

interface IProps {
  data: any[];
  children: React.ReactNode;
  customClass?: string;
}

const ButtonMenu: React.FC<IProps> = ({ children, data, customClass }) => {
  const [showOption, setShowOption] = useState<boolean>(false);

  const renderReview = () => {
    return (
      <div className={style.menu} tabIndex={-1}>
        <PopperWrapper>
          <Menu data={data} />
        </PopperWrapper>
      </div>
    );
  };

  const handleHideOption = () => {
    setShowOption(false);
  };
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showOption}
        placement='bottom-start'
        offset={[0, 10]}
        render={() => renderReview()}
        onClickOutside={handleHideOption}
      >
        <div onClick={() => setShowOption(!showOption)} className={clsx(style.button, customClass)}>
          {children}
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default ButtonMenu;
