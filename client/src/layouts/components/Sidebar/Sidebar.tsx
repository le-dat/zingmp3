import clsx from "clsx"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import { useAuthContext } from "../../../auth/AuthProvider"
import { ButtonIcon } from "../../../components/Button"
import {
  IconDiscover,
  IconFollow,
  IconMusicKind,
  IconMusicNew,
  IconMusicTop100,
  IconMV,
  IconPersonal,
  IconPlayList,
  IconRadio,
  IconRecent,
  IconSong,
  IconZingChart,
} from "../../../components/Icons"
import {
  CA_NHAN,
  GAN_DAY,
  KHAM_PHA,
  LIBRARY_PLAY_LIST,
  MV,
  NHAC_MOI,
  RADIO,
  THEO_DOI,
  THE_LOAI,
  TOP_100,
  VIET_NAM,
  ZING_CHART,
} from "../../../constants"
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux"
import { setExpanded } from "../../../redux/reducers/sidebarSlice"
import { getToastWarn } from "../../../utils/toast"
import BtnAddPlayList from "./BtnAddPlayList"
import style from "./Sidebar.module.scss"
import SidebarAdvertise from "./SidebarAdvertise"
import SidebarHeader from "./SidebarHeader"
import SidebarMenu from "./SidebarMenu"
import SidebarMenuItem from "./SidebarMenu/SidebarMenuItem"

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const { currentUser } = useAuthContext()
  const { isExpanded } = useAppSelector((state) => state.sidebar)

  const handleClickBlockVip = () => {
    getToastWarn({ msg: "Agribank !" })
  }
  return (
    <aside className={clsx(style.aside, { [style.isExpanded]: isExpanded })}>
      <SidebarHeader />

      <SidebarMenu>
        <SidebarMenuItem navLink icon={<IconPersonal />} title="Cá Nhân" to={CA_NHAN} />
        <SidebarMenuItem navLink icon={<IconDiscover />} title="Khám Phá" to={KHAM_PHA} />
        <SidebarMenuItem navLink icon={<IconZingChart />} title="#zingchart" to={ZING_CHART} />
        <SidebarMenuItem navLink icon={<IconRadio />} title="Radio" to={RADIO} />
        <SidebarMenuItem navLink icon={<IconFollow />} title="Theo Dõi" to={THEO_DOI} />
      </SidebarMenu>
      <div className={style.divide}></div>
      <div className={clsx(style.container, "scrollbar")}>
        <SidebarMenu>
          <SidebarMenuItem navLink icon={<IconMusicNew />} title="Nhạc Mới" to={NHAC_MOI} />
          <SidebarMenuItem navLink icon={<IconMusicKind />} title="Thể Loại" to={THE_LOAI} />
          <SidebarMenuItem navLink icon={<IconMusicTop100 />} title="Top 100" to={TOP_100} />
          <SidebarMenuItem navLink icon={<IconMV />} title="MV" to={`${MV}/${VIET_NAM}`} />
        </SidebarMenu>

        <SidebarAdvertise
          title="NÂNG CẤP VIP"
          description="Nghe nhạc không quảng cáo cùng kho nhạc VIP"
          onClick={handleClickBlockVip}
        />

        {currentUser && (
          <SidebarMenu title="Thư viện">
            <SidebarMenu>
              <SidebarMenuItem icon={<IconSong />} title="Bài Hát" to={CA_NHAN} />
              <SidebarMenuItem icon={<IconPlayList />} title="Playlist" to={`${CA_NHAN}/${LIBRARY_PLAY_LIST}`} />
              <SidebarMenuItem icon={<IconRecent />} title="Gần Đây" to={`${CA_NHAN}/${GAN_DAY}`} />
            </SidebarMenu>
          </SidebarMenu>
        )}
      </div>

      <BtnAddPlayList />

      <ButtonIcon
        backgroundLarge
        rounded
        icon={isExpanded ? <AiOutlineLeft /> : <AiOutlineRight />}
        customClass={style.btnExpanded}
        onClick={() => dispatch(setExpanded(!isExpanded))}
      />
    </aside>
  )
}

export default Sidebar
