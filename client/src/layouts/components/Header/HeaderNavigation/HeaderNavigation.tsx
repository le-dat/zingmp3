import React from "react";
import { AiOutlineInfoCircle, AiOutlineRight, AiOutlineSetting } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import { BsDisplay, BsTelephone, BsUpload } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiAdvertisementFill, RiVipDiamondLine, RiVipFill } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";

import images from "../../../../assets/images";
import { useAuthContext } from "../../../../auth/AuthProvider";
import { ButtonIcon, ButtonMenu } from "../../../../components/Button";
import { IconTheme } from "../../../../components/Icons";
import Image from "../../../../components/Image";
import { UPDATE } from "../../../../constants";
import { useAppDispatch } from "../../../../hooks/useRedux";
import { setShowThemeModal } from "../../../../redux/reducers/themeSlice";
import { getToastWarn } from "../../../../utils/toast";
import style from "./HeaderNavigation.module.scss";

const MENU_SETTING = [
  {
    leftIcon: <BiBlock />,
    title: "Danh sách chặn",
  },
  {
    leftIcon: <MdOutlineOndemandVideo />,
    title: "Chât lượng phát nhạc",
    rightIcon: <AiOutlineRight />,
    children: [{ title: "SQ 128" }, { title: "HQ 320" }],
  },
  {
    leftIcon: <BsDisplay />,
    title: "Giao diện",
    rightIcon: <AiOutlineRight />,
  },
  {
    leftIcon: <AiOutlineInfoCircle />,
    title: "Giới thiệu",
  },
  {
    leftIcon: <BsTelephone />,
    title: "Liên hệ",
  },
  {
    leftIcon: <RiAdvertisementFill />,
    title: "Quảng cáo",
  },
  {
    leftIcon: <TbNotes />,
    title: "Thỏa thuận sử dụng",
  },
  {
    leftIcon: <HiOutlineShieldCheck />,
    title: "Chính sách bảo mật",
  },
];
const MENU_USER = [
  {
    leftIcon: <RiVipDiamondLine />,
    title: "Nâng cấp VIP",
  },
  {
    leftIcon: <RiVipFill />,
    title: "Mua code VIP",
  },
  {
    leftIcon: <BsUpload />,
    title: "Tải lên",
  },
  {
    leftIcon: <FaInfoCircle />,
    title: "Cập nhật thông tin",
    to: `/${UPDATE}`,
    separate: true,
  },
];
const HeaderNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAuthContext();

  const handleTheme = () => {
    dispatch(setShowThemeModal(true));
  };
  const handleVip = () => {
    getToastWarn({ msg: "Argibank" });
  };
  return (
    <div className={style.accounts}>
      <ButtonIcon backgroundLarge rounded icon={<IconTheme />} onClick={handleTheme} title='Chủ Đề' />
      <ButtonIcon
        backgroundLarge
        rounded
        icon={<RiVipDiamondLine />}
        onClick={handleVip}
        title='Nâng cấp VIP'
        customClass={style.iconVip}
      />

      <ButtonMenu data={MENU_SETTING} customClass={style.menu}>
        <ButtonIcon backgroundLarge rounded icon={<AiOutlineSetting />} title='Cài đặt' />
      </ButtonMenu>
      <ButtonMenu data={MENU_USER}>
        <Image src={currentUser?.photoURL ?? images.avatar} rounded className={style.image} />
      </ButtonMenu>
    </div>
  );
};

export default HeaderNavigation;
