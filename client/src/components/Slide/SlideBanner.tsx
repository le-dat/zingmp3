import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

import { BannerIProps } from "../../interface";
import { formatLinkBanner } from "../../utils/common";
import Image from "../Image";
import style from "./SlideBanner.module.scss";

interface IProps {
  data: BannerIProps[];
}
const SlideBanner: React.FC<IProps> = ({ data = Array(10).fill({}) }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const timeRef = useRef<any>(null);

  const handleNext = () => {
    if (currentImage >= data.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(data.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  useEffect(() => {
    timeRef.current = setTimeout(() => handleNext(), 4000);

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, [currentImage]);

  return (
    <div className={clsx("is-center", style.slider)}>
      <button onClick={handleNext} className={clsx("is-center", style.btnNext)}>
        <GrNext />
      </button>
      <button onClick={handlePrev} className={clsx("is-center", style.btnPrev)}>
        <GrPrevious />
      </button>

      {data.map((item, index) => (
        <Link
          to={item?.type === 4 ? formatLinkBanner(item.encodeId) : ""}
          key={`banner-${index}`}
          className={clsx(style.block, {
            [style.current]: index === currentImage,
            [style.prev]: currentImage - 1 < 0 ? index === data.length - 1 : index === currentImage - 1,
            [style.next]: currentImage + 1 >= data.length ? index === 0 : index === currentImage + 1,
          })}
        >
          <Image src={item.banner} alt={item?.description} className={style.image} />
        </Link>
      ))}
    </div>
  );
};

export default SlideBanner;
