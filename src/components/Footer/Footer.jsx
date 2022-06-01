import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import axios from "axios";
import Timer from "./Timer";
import format from "format-duration";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDots, BsPlayFill } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { IoIosPause } from "react-icons/io";
import { MdOpenInFull } from "react-icons/md";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import style from "./Footer.module.scss";
import {
  renderSong,
  setLoading,
  createSong,
  setRandom,
  setRepeat,
} from "../../redux/reducer/songSlice";
import {
  setDuration,
  setFullScreen,
  setMute,
  setPlay,
} from "../../redux/reducer/homeSlice";
import { setIndexZingChart } from "../../redux/reducer/zingChartSlice";
import Volume from "./Volume/Volume";
import { config } from "../../localStorage/localStorage";

const Footer = () => {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const progressUpdateRef = useRef();
  const btnNextRef = useRef();
  const audio = document.querySelector("#audio");

  const time = useSelector((state) => state.home.time);
  const percentage = useSelector((state) => state.home.percentage);
  const isPlay = useSelector((state) => state.home.isPlay);
  const index = useSelector((state) => state.zingChart.index);
  const indexNewSong = useSelector((state) => state.newSong.index);
  const topCharts = useSelector((state) => state.zingChart.topCharts);
  const isRandom = useSelector((state) => state.song.isRandom);
  const isRepeat = useSelector((state) => state.song.isRepeat);
  const loading = useSelector((state) => state.song.loading);
  const songId = useSelector((state) => state.song.songId);
  const songUrl = useSelector((state) => state.song.songUrl);
  const thumbnail = useSelector((state) => state.song.thumbnail);
  const title = useSelector((state) => state.song.title);
  const artistsNames = useSelector((state) => state.song.artistsNames);
  const duration = useSelector((state) => state.song.duration);
  const showFullScreen = useSelector((state) => state.home.fullscreen);

  useEffect(() => {
    const render = async () => {
      await axios
        .get(`https://music-player-pink.vercel.app/api/song?id=${songId}`)
        .then((res) => {
          // get value in array 128, vip
          const data = Object.values(res.data.data);
          dispatch(renderSong(data[0]));
        })
        .catch((err) => console.error(err));
    };

    render();
    return () => {
      dispatch(setLoading());
    };
  }, [dispatch, songId, index, indexNewSong]);

  const handleUpdatePercentage = () => {
    if (audioRef.current.duration) {
      const progressPercentage = Math.floor(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
      progressUpdateRef.current.style.width = progressPercentage + "%";

      const time = Math.floor(audioRef.current.currentTime * 1000);
      const duration = {
        time: time,
        percentage: progressPercentage + "%",
      };
      dispatch(setDuration(duration));
    }
  };
  const handleSeekTime = (e) => {
    const seekTime = (audioRef.current.duration / 100) * e.target.value;
    audioRef.current.currentTime = seekTime;
  };
  // handle tua bài hát nhả ra mới thêm current time
  const handleMouseMove = (e) => {};

  // const handleBtnPlay = () => {
  //   dispatch(setPlay(!isPlay));
  //   isPlay ? audioRef.current.pause() : audioRef.current.play();
  // };
  const handleBtnPlay = () => {
    isPlay ? audioRef.current.pause() : audioRef.current.play();
  };
  const handlePlay = () => {
    dispatch(setPlay(true));
    audioRef.current.play();
  };
  const handlePause = () => {
    dispatch(setPlay(false));
    audioRef.current.pause();
  };

  const nextSong = () => {
    if (index >= topCharts.length - 1) {
      dispatch(setIndexZingChart(0));
      dispatch(createSong(topCharts[0]));
    } else {
      dispatch(setIndexZingChart(index + 1));
      dispatch(createSong(topCharts[index + 1]));
    }
    dispatch(setPlay(true));
  };
  const preSong = () => {
    if (index <= 0) {
      dispatch(setIndexZingChart(topCharts.length - 1));
      dispatch(createSong(topCharts[topCharts.length - 1]));
    } else {
      dispatch(setIndexZingChart(index - 1));
      dispatch(createSong(topCharts[index - 1]));
    }
    dispatch(setPlay(true));
  };

  const randomSong = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * topCharts.length);
    } while (newIndex === index);
    dispatch(setIndexZingChart(newIndex));
    dispatch(createSong(topCharts[newIndex]));
  };
  // bật/tắt màu btn random song
  const handleBtnRandom = () => {
    dispatch(setRandom(!isRandom));
  };

  const handleBtnRepeat = () => {
    dispatch(setRepeat(!isRepeat));
  };
  const handleBtnNext = () => {
    isRandom ? randomSong() : nextSong();
  };
  const handleBtnPre = () => {
    preSong();
  };

  const handleLoadStart = () => {
    dispatch(setPlay(isPlay));
    isPlay ? audioRef.current.play() : audioRef.current.pause();
  };
  const handleAudioEnd = () => {
    isRepeat ? audioRef.current.play() : btnNextRef.current.click();
  };

  return (
    <div className={style.playerControl}>
      {!showFullScreen && (
        <div className={style.playerLeft}>
          <div className={style.media}>
            <div
              className={clsx(style.mediaLeft, "audioThumbnail")}
              onClick={() => dispatch(setFullScreen(true))}
            >
              <img src={thumbnail} alt="" className={style.img} />
              <div className={style.imgCover}>
                <MdOpenInFull />
              </div>
            </div>
            <div className={style.mediaCenter}>
              <h3 className={style.title}>{title}</h3>
              <p className={style.des}>{artistsNames}</p>
            </div>
            <div className={style.mediaRight}>
              <div
                className={clsx("btn", style.iconSmall, {
                  [style.active]: false,
                })}
              >
                <AiFillHeart />
              </div>
              <div className={clsx("btn", style.iconSmall)}>
                <BsThreeDots />
              </div>
            </div>
          </div>

          <div
            className={style.coverFull}
            onClick={() => dispatch(setFullScreen(true))}
          ></div>
        </div>
      )}

      <div className={style.playerCenter}>
        <div className={style.controller}>
          {/* btn random */}
          <button
            className={clsx("btn", style.iconMedium, {
              [style.active]: isRandom,
            })}
            onClick={handleBtnRandom}
          >
            <FaRandom />
          </button>

          {/* btn pre */}
          <button
            id="btnPre"
            className={clsx("btn ", style.iconAction)}
            onClick={handleBtnPre}
          >
            <MdSkipPrevious />
          </button>

          {/* btn play */}
          {loading ? (
            <button className={clsx("btn ", style.iconLoading)}>
              <BiLoader />
            </button>
          ) : (
            <button
              className={clsx("btn ", style.iconPlay)}
              onClick={handleBtnPlay}
            >
              {isPlay ? <IoIosPause /> : <BsPlayFill />}
            </button>
          )}

          {/* btn next */}
          <button
            ref={btnNextRef}
            id="btnNext"
            className={clsx("btn ", style.iconAction)}
            onClick={handleBtnNext}
          >
            <MdSkipNext />
          </button>

          {/* btn repeat */}
          <button
            className={clsx("btn", style.iconMedium, {
              [style.active]: isRepeat,
            })}
            onClick={handleBtnRepeat}
          >
            <ImLoop />
          </button>
        </div>

        <div className={style.progressBlock}>
          {audio && <Timer audio={audio} />}
          <input
            type="range"
            value="0"
            step="1"
            min="0"
            max="100"
            className={style.progress}
            onChange={handleSeekTime}
            onMouseMove={handleMouseMove}
          />
          <div className={style.progressTrack}>
            <div
              ref={progressUpdateRef}
              id="progressTrackUpdate"
              className={style.progressTrackUpdate}
              style={{ width: percentage }}
            ></div>
          </div>
          {audioRef ? (
            <span className={style.duration}>
              {format(duration * 1000, { leading: true })}
            </span>
          ) : (
            <span className={style.duration}>
              {format(config.duration * 1000, { leading: true })}
            </span>
          )}
        </div>
      </div>

      {!showFullScreen && <Volume ref={audioRef} />}
      <audio
        ref={audioRef}
        src={songUrl}
        id="audio"
        value={time}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleUpdatePercentage}
        onEnded={handleAudioEnd}
        onLoadStart={handleLoadStart}
      />
    </div>
  );
};

export default Footer;
