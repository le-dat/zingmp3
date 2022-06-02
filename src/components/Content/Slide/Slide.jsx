import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsPlayFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import SkeletonLoading from "../Loading/SkeletonLoading";
import style from "./Slide.module.scss";
import artists from "./data";
import { setArtist, setLoading } from "../../../redux/reducer/followSlice";
import Loading from "../Loading/Loading";

const Slide = ({ rectangle, triangle, circle, square }) => {
  const banners = useSelector((state) => state.explore.banner);
  const liveStream = useSelector((state) => state.radio.liveStream);
  const [artistUrl, setArtistUrl] = useState("");

  const [btnLeft, setBtnLeft] = useState(false);
  const [btnRight, setBtnRight] = useState(true);
  const sliderTriangle = useRef();
  const sliderCircle = useRef();
  const dispatch = useDispatch();

  const handleMoveLeft = (slideType) => {
    if (btnLeft) {
      slideType.current.style.transform = "translateX(0)";
      setBtnLeft(false);
      setBtnRight(true);
    }
  };
  const handleMoveRight = (slideType) => {
    if (btnRight) {
      slideType.current.style.transform = "translateX(-30%)";
      setBtnLeft(true);
      setBtnRight(false);
    }
  };

  const handleChooseArtist = async (artistUrl) => {
    setArtist(artistUrl);

    await axios
      .get(`https://music-player-pink.vercel.app/api/artist?name=${artistUrl}`)
      .then(({ data }) => {
        dispatch(setArtist(data.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    return () => {
      dispatch(setLoading());
    };
  }, [artistUrl, dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      {rectangle &&
        (Object.keys(banners).length === 0 ? (
          <SkeletonLoading
            laptop="l-4"
            tablet="m-4"
            mobile="c-12"
            num="3"
            mt="mt-10"
          />
        ) : (
          <div className={style.slide}>
            <Slider {...settings}>
              {banners.map((banner, index) => (
                <div className={style.slideItem} key={banner.banner}>
                  <img src={banner.banner} alt="" className={style.img} />
                </div>
              ))}
            </Slider>
          </div>
        ))}

      {triangle && (
        <div className={style.wrapper}>
          <div className={clsx([style.carousel, style.heightS])}>
            <div className={style.inner} ref={sliderTriangle}>
              {artists.map((artist, i) => (
                <div
                  className={style.innerItem}
                  key={i}
                  onClick={() => handleChooseArtist(artist.url)}
                >
                  <Link
                    to={`/artist/${artist.name}`}
                    className={style.innerLink}
                  >
                    <img
                      src={`https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/${artist.name}.png`}
                      alt="img artist"
                      className={style.img}
                    />
                  </Link>
                </div>
              ))}
            </div>

            <button
              className={clsx([
                style.controlPre,
                { [style.activeBtn]: btnLeft },
              ])}
              onClick={() => handleMoveLeft(sliderTriangle)}
            >
              <GrPrevious />
            </button>
            <button
              className={clsx([
                style.controlNext,
                { [style.activeBtn]: btnRight },
              ])}
              onClick={() => handleMoveRight(sliderTriangle)}
            >
              <GrNext />
            </button>
          </div>
        </div>
      )}

      {circle &&
        (Object.keys(liveStream).length === 0 ? (
          // <SkeletonLoading laptop="l-1" tablet="m-2" mobile="c-3" />
          <Loading />
        ) : (
          <div className={style.container}>
            <div className={style.wrapper}>
              <div className={style.carousel}>
                <div className={style.content} ref={sliderCircle}>
                  {liveStream.map((livestream) => (
                    <div
                      className={style.cardContent}
                      key={livestream.encodeId}
                    >
                      <div className={style.topContent}>
                        <div className={style.imgContentCover}>
                          <img
                            src={livestream.program.thumbnail}
                            alt=""
                            className={style.imgContent}
                          />
                        </div>
                        <div className={style.imgCard}>
                          <div className={style.imgIconCover}>
                            <img
                              src={livestream.thumbnail}
                              alt=""
                              className={style.imgIcon}
                            />
                          </div>

                          <div className={style.imgLiveCover}>
                            <img
                              src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                              alt=""
                              className={style.imgLive}
                            />
                          </div>
                          <div className={style.cover}>
                            <div className={style.iconBtn}>
                              <BsPlayFill />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.botContent}>
                        <h2 className={style.title}>{livestream.host.name}</h2>
                        <p className={style.des}>
                          {livestream.activeUsers} người đang nghe
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className={clsx([
                    style.controlPre,
                    { [style.activeBtn]: btnLeft },
                  ])}
                  onClick={() => handleMoveLeft(sliderCircle)}
                >
                  <GrPrevious />
                </button>
                <button
                  className={clsx([
                    style.controlNext,
                    { [style.activeBtn]: btnRight },
                  ])}
                  onClick={() => handleMoveRight(sliderCircle)}
                >
                  <GrNext />
                </button>
              </div>
            </div>
          </div>
        ))}

      {square && (
        <div className={style.wrapper}>
          <div className={style.containerSquare}>
            <div className={style.slideItem}>1</div>
            <div className={style.slideItem}>1</div>
            <div className={style.slideItem}>1</div>
            <div className={style.slideItem}>1</div>
            <div className={style.slideItem}>1</div>
            <div className={style.slideItem}>1</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slide;
