import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";
import Loading from "../Loading/Loading";
import Table from "../Table/Table";
import style from "./Artist.module.scss";

const Artist = () => {
  const artist = useSelector((state) => state.follow.artist);
  const sections = useSelector(
    (state) => state.follow.artist.sections[0].items
  );
  const loading = useSelector((state) => state.follow.loading);
  console.log(sections);
  console.log(loading);
  return (
    <div className={clsx(style.container, "mt-5")}>
      <div className="grid">
        {loading ? (
          <Loading />
        ) : (
          <div className={clsx("row", style.marginMobile)}>
            <div className={clsx("col l-7 m-7 c-9")}>
              <div className={style.header}>{artist.realName}</div>
              <div className={style.sortBiography}>{artist.sortBiography}</div>
              <div className={style.award}>
                {artist.award &&
                  artist.awards.map((item, i) => (
                    <h5 className={style.word} key={i}>
                      {item}
                    </h5>
                  ))}
              </div>
              <div className={style.follow}>
                Quan tâm <BsDot /> {artist.follow}
              </div>
            </div>
            <div className={clsx("col l-5 m-5 c-3")}>
              <div className={style.imgCover}>
                <img
                  src={artist.thumbnailM}
                  alt="img artist"
                  className={style.img}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={clsx(style.wrapper, "mt-3")}>
        <Table playlist={sections} loading={loading} />
      </div>
    </div>
  );
};

export default Artist;
