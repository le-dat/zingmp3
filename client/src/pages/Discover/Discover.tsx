import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { PlayListAlbum } from "../../components/PlayList";
import { SlideArtist, SlideBanner, SlideRadio } from "../../components/Slide";
import { useScrollTop } from "../../hooks";
import * as services from "../../services";
import { getArrayPlayListEmpty } from "../../utils/song";
import { SectionIProps } from "../interface";
import style from "./Discover.module.scss";

interface ResponseIProps {
  items: SectionIProps[];
}
const Discover: React.FC = () => {
  useScrollTop();
  const [data, setData] = useState<SectionIProps[]>([
    {
      sectionType: "banner",
      items: Array(10).fill({}),
      title: ""
    },
    {
      sectionType: "playlist",
      items: getArrayPlayListEmpty(20),
      title: ""
    }
  ]);

  useEffect(() => {
    const fetchApi = async () => {
      const res: ResponseIProps = await services.getHome();
      console.log(res);
      setData(res.items);
    };
    fetchApi();
  }, []);

  return (
    <>
      <Helmet>
        <title>Zing MP3 | Nghe tải nhạc trực tuyến</title>
      </Helmet>

      <div className={style.wrapper}>
        {data?.map((item, i) =>
          item.sectionType === "banner" ? (
            <div key={`banner-${i}`} className={style.banner}>
              <SlideBanner data={item.items} />
            </div>
          ) : item.sectionType === "playlist" ? (
            <div key={`playlist-${i}`} className={style.playlist}>
              <PlayListAlbum data={item.items} title={item.title} />
            </div>
          ) : item.sectionType === "new-release" ? (
            <div key={`new-release-${i}`} className={style.newRelease}>
              {/* <Slide slider={item.items} /> */}
            </div>
          ) : item.sectionType === "livestream" ? (
            <div key={`livestream-${i}`} className={style.liveStream}>
              <SlideRadio data={item.items} title={item.title} />
            </div>
          ) : item.sectionType === "RTChart" ? (
            <div key={`RTChart-${i}`} className={style.RTChart}>
              {/* <Slide slider={item.items} /> */}
            </div>
          ) : item.sectionType === "weekChart" ? (
            <div key={`weekChart-${i}`} className={style.weekChart}>
              {/* <Slide slider={item.items} /> */}
            </div>
          ) : item.sectionType === "artistSpotlight" ? (
            <div key={`artistSpotlight-${i}`} className={style.artistSpotlight}>
              <SlideArtist />
            </div>
          ) : item.sectionType === "event" ? (
            <div key={`event-${i}`} className={style.event}>
              {/* <Slide slider={item.items} /> */}
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default Discover;
