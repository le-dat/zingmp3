import "react-loading-skeleton/dist/skeleton.css"
import { Route, Routes } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import "tippy.js/dist/tippy.css"

import PrivateRouter from "./auth/PrivateRouter"
import {
  ARTIST,
  CA_NHAN,
  DETAIL_PLAY_LIST,
  GAN_DAY,
  ID,
  KHAM_PHA,
  LIBRARY_PLAY_LIST,
  LIBRARY_SONG,
  LOGIN,
  MV,
  NHAC_MOI,
  NOT_FOUND,
  RADIO,
  SIGNUP,
  THEO_DOI,
  THE_LOAI,
  TOP_100,
  UPDATE,
  VIDEO,
  ZING_CHART,
  ZING_CHART_WEEK,
} from "./constants"
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout"
import {
  Artist,
  DetailPlayList,
  Discover,
  Follow,
  Login,
  MusicKind,
  MusicNew,
  Mv,
  Notfound,
  Personal,
  PersonalPlayList,
  PersonalRecent,
  PersonalSong,
  Radio,
  SignUp,
  Top100,
  Update,
  Video,
  ZingChart,
  ZingChartWeek,
} from "./pages"

function App() {
  return (
    <DefaultLayout>
      <Routes>
        {/* ======================= public router ===================== */}
        <Route path={KHAM_PHA} element={<Discover />} />;
        <Route path={ZING_CHART} element={<ZingChart />} />
        <Route path={`${ZING_CHART}/${ZING_CHART_WEEK}/${ID}`} element={<ZingChartWeek />} />
        <Route path={RADIO} element={<Radio />}>
          <Route path={ID} element={<Radio />} />
        </Route>
        <Route path={THEO_DOI} element={<Follow />} />;
        <Route path={NHAC_MOI} element={<MusicNew />} />;
        <Route path={THE_LOAI} element={<MusicKind />} />;
        <Route path={TOP_100} element={<Top100 />} />;
        <Route path={`${MV}/${ID}`} element={<Mv />} />;
        <Route path={`${VIDEO}/${ID}`} element={<Video />} />;
        <Route path={`${DETAIL_PLAY_LIST}/${ID}`} element={<DetailPlayList />} />;
        <Route path={`${ARTIST}/${ID}`} element={<Artist />} />;
        <Route path={LOGIN} element={<Login />} />;
        <Route path={SIGNUP} element={<SignUp />} />;
        {/* ======================= private router ===================== */}
        <Route element={<PrivateRouter />}>
          <Route path={CA_NHAN} element={<Personal />}>
            <Route index element={<PersonalSong />} />;
            <Route path={LIBRARY_SONG} element={<PersonalSong />} />;
            <Route path={LIBRARY_PLAY_LIST} element={<PersonalPlayList />} />;
            <Route path={GAN_DAY} element={<PersonalRecent />} />;
          </Route>
          <Route path={UPDATE} element={<Update />} />;
        </Route>
        <Route path={NOT_FOUND} element={<Notfound />} />;
      </Routes>
    </DefaultLayout>
  )
}

export default App
